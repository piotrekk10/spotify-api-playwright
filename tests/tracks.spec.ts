import { test as _test } from '@playwright/test';

import { assertError, assertTrack } from '@/assertions/api';
import { expectStatusCode } from '@/assertions/solutions';
import { TracksAPIClient } from '@/core/api';
import { getAuthAPIContext, getDefaultAPIContext } from '@/core/context';
import { INVALID_TOKEN, NOT_FOUND, NO_TOKEN } from '@/data/errors';
import { EXAMPLE_TRACK } from '@/data/tracks';
import { ErrorResponse } from '@/models/common';
import { TrackResponse } from '@/models/tracks';
import { tracksSchema } from '@/schema/api/tracks-schema';
import { validateSchema } from '@/schema/validator';

type TestProps = {
  authTracksClient: TracksAPIClient;
  tracksClient: TracksAPIClient;
  wrongAuthTracksClient: TracksAPIClient;
};

const test = _test.extend<TestProps>({
  authTracksClient: async ({}, use) => {
    const authContext = await getAuthAPIContext({});
    await use(new TracksAPIClient(authContext));
  },
  tracksClient: async ({}, use) => {
    const authContext = await getDefaultAPIContext();
    await use(new TracksAPIClient(authContext));
  },
  wrongAuthTracksClient: async ({}, use) => {
    const authContext = await getAuthAPIContext({ authToken: 'wrong token' });
    await use(new TracksAPIClient(authContext));
  },
});

test.describe('Tracks', () => {
  test('Get track', async ({ authTracksClient }) => {
    const response = await authTracksClient.getTrack(EXAMPLE_TRACK.id);
    const json: TrackResponse = await response.json();

    await expectStatusCode({
      actual: response.status(),
      expected: 200,
      api: response.url(),
    });
    await assertTrack({
      expectedTrack: EXAMPLE_TRACK,
      actualTrack: json,
      containsAlbum: true,
    });
    await validateSchema({ schema: tracksSchema, json });
  });

  test('Get track - no token ', async ({ tracksClient }) => {
    const response = await tracksClient.getTrack(EXAMPLE_TRACK.id);
    const json: ErrorResponse = await response.json();

    await expectStatusCode({
      actual: response.status(),
      expected: NO_TOKEN.status,
      api: response.url(),
    });
    await assertError({ expectedError: NO_TOKEN, actualError: json });
  });

  test('Get track - invalid token', async ({ wrongAuthTracksClient }) => {
    const response = await wrongAuthTracksClient.getTrack(EXAMPLE_TRACK.id);
    const json: ErrorResponse = await response.json();

    await expectStatusCode({
      actual: response.status(),
      expected: INVALID_TOKEN.status,
      api: response.url(),
    });
    await assertError({ expectedError: INVALID_TOKEN, actualError: json });
  });
  test('Get track - resorce not found', async ({ authTracksClient }) => {
    const response = await authTracksClient.getTrack('0MHXrqn909p0LRTPsNsGEj');
    const json: ErrorResponse = await response.json();

    await expectStatusCode({
      actual: response.status(),
      expected: NOT_FOUND.status,
      api: response.url(),
    });
    await assertError({ expectedError: NOT_FOUND, actualError: json });
  });
});
