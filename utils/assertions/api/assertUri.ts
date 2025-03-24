import test from '@playwright/test';

import { expectToEqual, expectToMatch } from '@/assertions/solutions';

type expectToMatchUriPattern = {
  actualCategory: 'album' | 'artist' | 'track';
  actualId: string;
  actualUri: string;
};

export const assertUri = async ({
  actualCategory,
  actualId,
  actualUri,
}: expectToMatchUriPattern) => {
  await test.step(`Checking that ${actualCategory} 'uri' is correct"`, async () => {
    await expectToMatch({
      actual: actualUri,
      expected: /spotify:(album|artist|track):[a-zA-Z\d]{22}/,
      description: 'uri pattern',
    });
    await expectToEqual({
      actual: actualUri,
      expected: `spotify:${actualCategory}:${actualId}`,
      description: 'uri',
    });
  });
};
