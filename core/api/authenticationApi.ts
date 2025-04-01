import test, { APIRequestContext, expect, request } from "@playwright/test";

import { APIRoutes } from "@/constants/routes";
import { getDefaultAPIContext } from "@/core/context/defaultContext";
import { AuthUser } from "@/models/common";
import { APIClient } from "@/models/common/client";

class AuthAPIClient implements APIClient {
  constructor(public context: APIRequestContext) {}

  async getAuthToken(data: AuthUser): Promise<string> {
    const response = await test.step(`Getting token for user with client_id and client_secret`, async () => {
      const authContext = await request.newContext({
        baseURL: process.env.SPOTIFY_ACCOUNTS_URL,
      });
      return await authContext.post(APIRoutes.Token, {
        headers: { "Content-Type": " application/x-www-form-urlencoded" },
        form: {
          grant_type: "client_credentials",
          client_id: `${data.clientId}`,
          client_secret: `${data.clientSecret}`,
        },
      });
    });
    const json = await response.json();

    expect(response.status()).toBe(200);
    expect(json).toHaveProperty("access_token");

    return json.access_token;
  }
}

export const getAuthAPIClient = async (): Promise<AuthAPIClient> => {
  const defaultContext = await getDefaultAPIContext();
  return new AuthAPIClient(defaultContext);
};
