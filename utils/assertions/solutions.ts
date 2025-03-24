import { expect, test } from '@playwright/test';

type ExpectToEqual<T> = {
  actual: T;
  expected: T;
  description: string;
};

type ExpectToMatch<T> = {
  actual: T;
  expected: RegExp;
  description: string;
};

type ExpectStatusCode = { api: string } & Omit<
  ExpectToEqual<number>,
  'description'
>;

type ExpectToContain<T> = {
  actualArray: T[];
  expected: T;
  description: string;
};

export const expectToEqual = async <T>({
  actual,
  expected,
  description,
}: ExpectToEqual<T>) => {
  await test.step(`Checking that ${description} is equal to "${expected}"`, async () => {
    expect(actual as any).toEqual(expected);
  });
};

export const expectToContain = async <T>({
  actual,
  expected,
  description,
}: ExpectToEqual<T>) => {
  await test.step(`Checking that ${description} contains "${expected}"`, async () => {
    expect(actual as any).toContain(expected);
  });
};

export const expectToMatch = async <T>({
  actual,
  expected,
  description,
}: ExpectToMatch<T>) => {
  await test.step(`Checking that ${description} is matching "${expected}"`, async () => {
    expect(actual as any).toMatch(expected);
  });
};

export const expectStatusCode = async ({
  actual,
  expected,
  api,
}: ExpectStatusCode): Promise<void> => {
  await test.step(`Checking that response status code for API "${api}" equal to ${expected}`, async () => {
    await expectToEqual({
      actual,
      expected,
      description: 'Response Status code',
    });
  });
};

export const expectToContainEqual = async <T>({
  actualArray,
  expected,
  description,
}: ExpectToContain<T>) => {
  await test.step(`Checking that ${description} contains object`, async () => {
    expect(actualArray as any).toContain(expected);
  });
};
