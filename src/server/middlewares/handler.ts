import { Response } from "express";

class Handler {
  constructor() {}
  public success(res: Response, statusCode: number, data: any): Response<any> {
    return res.status(statusCode).send({
      code: 0,
      msg: "success",
      data: data,
    });
  }

  public error(
    res: Response,
    statusCode: number,
    data: any,
    message?: string,
  ): Response<any> {
    return res.status(statusCode).send({
      status: "error",
      message: message,
      data: data,
    });
  }
}

export default new Handler();
