import { test as _test } from '@playwright/test';

import { assertAlbum, assertError } from '@/assertions/api';
import { expectStatusCode } from '@/assertions/solutions';
import { AlbumsAPIClient } from '@/core/api/albumsApi';
import { getAuthAPIContext, getDefaultAPIContext } from '@/core/context';
import { EXAMPLE_ALBUM } from '@/data/albums';
import { INVALID_TOKEN, NOT_FOUND, NO_TOKEN } from '@/data/errors';
import { AlbumResponse } from '@/models/albums';
import { ErrorResponse } from '@/models/common';

type TestProps = {
  authAlbumsClient: AlbumsAPIClient;
  albumsClient: AlbumsAPIClient;
  wrongAuthAlbumsClient: AlbumsAPIClient;
};

const test = _test.extend<TestProps>({
  authAlbumsClient: async ({}, use) => {
    const authContext = await getAuthAPIContext({});
    await use(new AlbumsAPIClient(authContext));
  },
  albumsClient: async ({}, use) => {
    const authContext = await getDefaultAPIContext();
    await use(new AlbumsAPIClient(authContext));
  },
  wrongAuthAlbumsClient: async ({}, use) => {
    const authContext = await getAuthAPIContext({ authToken: 'wrong token' });
    await use(new AlbumsAPIClient(authContext));
  },
});

test.describe('Albums', () => {
  test('Get album', async ({ authAlbumsClient }) => {
    const response = await authAlbumsClient.getAlbum(EXAMPLE_ALBUM.id);
    const json: AlbumResponse = await response.json();

    await expectStatusCode({
      actual: response.status(),
      expected: 200,
      api: response.url(),
    });
    await assertAlbum({ expectedAlbum: EXAMPLE_ALBUM, actualAlbum: json });
    //await validateSchema({ schema: albumsSchema, json });
  });

  test('Get album - no token ', async ({ albumsClient }) => {
    const response = await albumsClient.getAlbum(EXAMPLE_ALBUM.id);
    const json: ErrorResponse = await response.json();

    await expectStatusCode({
      actual: response.status(),
      expected: 401,
      api: response.url(),
    });
    await assertError({ expectedError: NO_TOKEN, actualError: json });
  });

  test('Get album - invalid token', async ({ wrongAuthAlbumsClient }) => {
    const response = await wrongAuthAlbumsClient.getAlbum(EXAMPLE_ALBUM.id);
    const json: ErrorResponse = await response.json();

    await expectStatusCode({
      actual: response.status(),
      expected: 401,
      api: response.url(),
    });
    await assertError({ expectedError: INVALID_TOKEN, actualError: json });
  });
  test('Get album - resorce not found', async ({ authAlbumsClient }) => {
    const response = await authAlbumsClient.getAlbum('0MHXrqn909p0LRTPsNsGEj');
    const json: ErrorResponse = await response.json();

    await expectStatusCode({
      actual: response.status(),
      expected: NOT_FOUND.status,
      api: response.url(),
    });
    await assertError({ expectedError: NOT_FOUND, actualError: json });
  });
});
