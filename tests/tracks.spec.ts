import { getAuthAPIContext } from "../core/context/auth-context";
import { expectStatusCode } from "../utils/assertions/solutions";
import { validateSchema } from "../utils/schema/validator";
import { test as _test } from "@playwright/test";
import { TracksAPIClient } from "../core/api/tracks-api";
import { assertTrack } from "../utils/assertions/api/assertTrack";
import { TrackResponse } from "../utils/types/api/tracks/trackResponse";
import { tracksSchema } from "../utils/schema/api/tracks-schema";
import { EXAMPLE_TRACK } from "../utils/data/tracks";

type TestProps = {
  tracksClient: TracksAPIClient;
};

const test = _test.extend<TestProps>({
  tracksClient: async ({}, use) => {
    const authContext = await getAuthAPIContext({});
    const tracksClient = new TracksAPIClient(authContext);
    await use(tracksClient);
  },
});

test.describe("Tracks", () => {
  test("Get track", async ({ tracksClient }) => {
    const response = await tracksClient.getTrack(EXAMPLE_TRACK.id);
    const json: TrackResponse = await response.json();

    await expectStatusCode({
      actual: response.status(),
      expected: 200,
      api: response.url(),
    });
    await assertTrack({ expectedTrack: EXAMPLE_TRACK, actualTrack: json });

    await validateSchema({ schema: tracksSchema, json });
  });
});
