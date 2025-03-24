import test from '@playwright/test';

import { expectToEqual, expectToMatch } from '@/assertions/solutions';

type expectToMatchHrefPattern = {
  actualCategory: 'album' | 'artist' | 'track';
  actualId: string;
  actualHref: string;
};

export const assertHref = async ({
  actualCategory,
  actualId,
  actualHref,
}: expectToMatchHrefPattern) => {
  await test.step(`Checking that ${actualCategory} 'href' is correct"`, async () => {
    await expectToMatch({
      actual: actualHref,
      expected:
        /https:\/\/api\.spotify\.com\/v1\/(album|artist|track)s\/[a-zA-Z\d]{22}/,
      description: 'Href pattern',
    });
    await expectToEqual({
      actual: actualHref,
      expected: `https://api.spotify.com/v1/${actualCategory}s/${actualId}`,
      description: 'href',
    });
  });
};
