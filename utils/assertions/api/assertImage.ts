import { expectToMatch } from '@/assertions/solutions';
import { Image } from '@/models/common';

type AssertImagesArrayProps = {
  actualImages: Image[];
};

export const assertImagesArray = async ({
  actualImages,
}: AssertImagesArrayProps) => {
  for (const image of actualImages) {
    await expectToMatch({
      actual: image.url,
      expected: /https:\/\/i\.scdn\.co\/image\/[a-z0-9]{40}/,
      description: 'image url pattern',
    });
    await expectToMatch({
      actual: image.width?.toString(),
      expected: /[0-9]{1,4}/,
      description: 'image width pattern',
    });
    await expectToMatch({
      actual: image.height?.toString(),
      expected: /[0-9]{1,4}/,
      description: 'image height pattern',
    });
  }
};
