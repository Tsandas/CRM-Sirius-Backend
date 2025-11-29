export class AppError extends Error {
  statusCode: number;
  customMessage: string;

  constructor(
    message: string,
    statusCode = 500,
    customMessage: string = "Something went wrong",
  ) {
    super(message);
    this.statusCode = statusCode;
    this.customMessage = customMessage;
    Error.captureStackTrace(this, this.constructor);
  }
}
