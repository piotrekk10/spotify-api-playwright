import test from '@playwright/test';

import { expectToMatch } from '@/assertions/solutions';
import { ExternalIds } from '@/models/common';

type expectToMatchExternalIdPattern = {
  actualCategory: 'album' | 'artist' | 'track';
  actualExternalId: ExternalIds;
};

export const assertExternalId = async ({
  actualCategory,
  actualExternalId,
}: expectToMatchExternalIdPattern) => {
  await test.step(`Checking that ${actualCategory} 'external id' is correct"`, async () => {
    if (actualExternalId.ean) {
      await expectToMatch({
        actual: actualExternalId.ean,
        expected: /[0-9]{13}/,
        description: 'external id (ean) pattern',
      });
    } else if (actualExternalId.isrc) {
      await expectToMatch({
        actual: actualExternalId.isrc,
        expected: /[A-Z]{2}[A-Z0-9]{3}[0-9]{7}/,

        description: 'external id (isrc) pattern',
      });
    } else if (actualExternalId.upc) {
      await expectToMatch({
        actual: actualExternalId.upc,
        expected: /[0-9]{12}/,

        description: 'external id (upc) pattern',
      });
    }
  });
};
