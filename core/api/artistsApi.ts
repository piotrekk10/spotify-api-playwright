import test, { APIRequestContext, APIResponse } from '@playwright/test';

import { APIRoutes } from '@/constants/routes';
import { APIClient } from '@/models/common/client';

export class ArtistsAPIClient implements APIClient {
  constructor(public context: APIRequestContext) {}

  async getArtist(artistId: string): Promise<APIResponse> {
    return await test.step(`Getting artist with id "${artistId}"`, async () => {
      return await this.context.get(`${APIRoutes.Artists}/${artistId}`);
    });
  }
}
