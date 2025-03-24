import test, { APIRequestContext, APIResponse } from '@playwright/test';

import { APIRoutes } from '@/constants/routes';
import { APIClient } from '@/models/common/client';

export class TracksAPIClient implements APIClient {
  constructor(public context: APIRequestContext) {}

  async getTrack(trackId: string): Promise<APIResponse> {
    return await test.step(`Getting track with id "${trackId}"`, async () => {
      return await this.context.get(`${APIRoutes.Tracks}/${trackId}`);
    });
  }
}
