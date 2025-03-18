import { ExternalUrls } from "../../types/api/common/externalUrls";
import { expectToEqual } from "../solutions";

type AssertExternalUrlsProps = {
  expectedExternalUrls: ExternalUrls;
  actualExternalUrls: ExternalUrls;
  description?: string;
};

export const assertExternalUrls = async ({
  expectedExternalUrls,
  actualExternalUrls,
  description,
}: AssertExternalUrlsProps) => {
  await expectToEqual({
    actual: actualExternalUrls.spotify,
    expected: expectedExternalUrls.spotify,
    description: `${description} ExternalUrls "spotify"`,
  });
};
