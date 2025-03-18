import test, {
  APIRequestContext,
  expect,
  request,
} from "@playwright/test";
import { APIRoutes } from "../../utils/constants/routes";
import { APIClient } from "../../utils/types/api/client";
import { AuthUser } from "../../utils/types/api/authentication";
import { getDefaultAPIContext } from "../context/default-context";

class AuthAPIClient implements APIClient {
  constructor(public context: APIRequestContext) {}

  async getAuthToken(data: AuthUser): Promise<string> {
    const response =
      await test.step(`Getting token for user with client_id and client_secret`, async () => {
        const authContext = await request.newContext({
          baseURL: process.env.ACCOUNTS_URI_SPOTIFY,
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
