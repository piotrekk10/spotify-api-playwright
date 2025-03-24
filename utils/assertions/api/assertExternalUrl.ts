import test from '@playwright/test';

import { expectToEqual, expectToMatch } from '@/assertions/solutions';
import { ExternalUrls } from '@/models/common';

type expectToMatchExternalUrlPattern = {
  actualCategory: 'album' | 'artist' | 'track';
  actualId: string;
  actualExternalUrl: ExternalUrls;
};
export const assertExternalUrl = async ({
  actualCategory,
  actualId,
  actualExternalUrl,
}: expectToMatchExternalUrlPattern) => {
  await test.step(`Checking that ${actualCategory} 'external url' is correct"`, async () => {
    if (actualExternalUrl) {
      await expectToMatch({
        actual: actualExternalUrl.spotify,
        expected:
          /https:\/\/open\.spotify\.com\/(album|artist|track)\/[a-zA-Z\d]{22}/,
        description: 'external url pattern',
      });
      await expectToEqual({
        actual: actualExternalUrl.spotify,
        expected: `https://open.spotify.com/${actualCategory}/${actualId}`,
        description: 'external url',
      });
    }
  });
};
