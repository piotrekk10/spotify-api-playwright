import { APIRequestContext, request } from '@playwright/test';

import { getAuthAPIClient } from '@/core/api/authenticationApi';
import { APIAuth } from '@/models/common/authentication';

export const getAuthAPIContext = async ({
  authToken,
}: APIAuth): Promise<APIRequestContext> => {
  if (!authToken) {
    const authClient = await getAuthAPIClient();
    authToken = await authClient.getAuthToken({
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
    });
  }

  return request.newContext({
    baseURL: process.env.BASE_URL_SPOTIFY,
    extraHTTPHeaders: {
      Authorization: `Bearer ${authToken}`,
    },
  });
};
