import { expectToEqual } from '@/assertions/solutions';
import { ErrorDataType } from '@/data/errors';
import { ErrorResponse } from '@/models/common';

type AssertErrorProps = {
  expectedError: ErrorDataType;
  actualError: ErrorResponse;
};

export const assertError = async ({
  expectedError,
  actualError,
}: AssertErrorProps) => {
  await expectToEqual({
    actual: actualError.error.status,
    expected: expectedError.status,
    description: 'error "status"',
  });
  await expectToEqual({
    actual: actualError.error.message,
    expected: expectedError.message,
    description: 'error "message"',
  });
};
