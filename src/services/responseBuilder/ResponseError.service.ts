import { StatusCode } from "../../models/enums/statusCode.enum";

export class ResponseError {
  public static INTERNAL_SERVER_ERROR = new ResponseError('InternalServerError', 'An error ocurred while trying to process your request.', StatusCode.INTERNAL_SERVER_ERROR);  
  
  public static INVALID_UUID = new ResponseError('InvalidUuid', 'Invalid UUID. Parameter must be UUID type.', StatusCode.BAD_REQUEST);

  public code: string;
  public message: string;
  public statusCode: number;

  constructor(code: string, message: string, statusCode: number) {
    this.code = code;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export class RcErrors extends Error {
  public code: string;
  public message: string;
  public statusCode: number;

  constructor(err: ResponseError) {
    super(err.message);
    this.code = err.code;
    this.message = err.message;
    this.statusCode = err.statusCode;
  }
}