import test, { APIRequestContext, APIResponse } from '@playwright/test';

import { APIRoutes } from '@/constants/routes';
import { APIClient } from '@/models/common/client';

export class AlbumsAPIClient implements APIClient {
  constructor(public context: APIRequestContext) {}

  async getAlbum(albumId: string): Promise<APIResponse> {
    return await test.step(`Getting album with id "${albumId}"`, async () => {
      return await this.context.get(`${APIRoutes.Albums}/${albumId}`);
    });
  }
}
