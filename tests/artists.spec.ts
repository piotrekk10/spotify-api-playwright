import { test as _test } from '@playwright/test';

import { assertArtist, assertError } from '@/assertions/api';
import { expectStatusCode } from '@/assertions/solutions';
import { ArtistsAPIClient } from '@/core/api';
import { getAuthAPIContext, getDefaultAPIContext } from '@/core/context';
import { EXAMPLE_ARTIST } from '@/data/artists';
import { INVALID_TOKEN, NOT_FOUND, NO_TOKEN } from '@/data/errors';
import { ArtistResponse } from '@/models/artists';
import { ErrorResponse } from '@/models/common';

type TestProps = {
  authArtistsClient: ArtistsAPIClient;
  artistsClient: ArtistsAPIClient;
  wrongAuthArtistsClient: ArtistsAPIClient;
};

const test = _test.extend<TestProps>({
  authArtistsClient: async ({}, use) => {
    const authContext = await getAuthAPIContext({});
    await use(new ArtistsAPIClient(authContext));
  },
  artistsClient: async ({}, use) => {
    const authContext = await getDefaultAPIContext();
    await use(new ArtistsAPIClient(authContext));
  },
  wrongAuthArtistsClient: async ({}, use) => {
    const authContext = await getAuthAPIContext({ authToken: 'wrong token' });
    await use(new ArtistsAPIClient(authContext));
  },
});

test.describe('Artists', () => {
  test('Get artist', async ({ authArtistsClient }) => {
    const response = await authArtistsClient.getArtist(EXAMPLE_ARTIST.id);
    const json: ArtistResponse = await response.json();

    await expectStatusCode({
      actual: response.status(),
      expected: 200,
      api: response.url(),
    });
    await assertArtist({ expectedArtist: EXAMPLE_ARTIST, actualArtist: json });
  });

  test('Get artist - no token ', async ({ artistsClient }) => {
    const response = await artistsClient.getArtist(EXAMPLE_ARTIST.id);
    const json: ErrorResponse = await response.json();

    await expectStatusCode({
      actual: response.status(),
      expected: 401,
      api: response.url(),
    });
    await assertError({ expectedError: NO_TOKEN, actualError: json });
  });

  test('Get artist - invalid token', async ({ wrongAuthArtistsClient }) => {
    const response = await wrongAuthArtistsClient.getArtist(EXAMPLE_ARTIST.id);
    const json: ErrorResponse = await response.json();

    await expectStatusCode({
      actual: response.status(),
      expected: 401,
      api: response.url(),
    });
    await assertError({ expectedError: INVALID_TOKEN, actualError: json });
  });
  test('Get artist - resorce not found', async ({ authArtistsClient }) => {
    const response = await authArtistsClient.getArtist(
      '0MHXrqn909p0LRTPsNsGEj',
    );
    const json: ErrorResponse = await response.json();

    await expectStatusCode({
      actual: response.status(),
      expected: NOT_FOUND.status,
      api: response.url(),
    });
    await assertError({ expectedError: NOT_FOUND, actualError: json });
  });
});
