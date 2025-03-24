export type ErrorDataType = {
  status: number;
  message: string;
};

export const NO_TOKEN: ErrorDataType = {
  status: 401,
  message: 'No token provided',
};

export const INVALID_TOKEN: ErrorDataType = {
  status: 401,
  message: 'Invalid access token',
};

export const NOT_FOUND: ErrorDataType = {
  status: 404,
  message: 'Resource not found',
};
