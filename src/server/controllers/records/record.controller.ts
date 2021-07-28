import { OptionsDTO } from "@app/data/records/record.dto";
import RecordsRepository from "@app/data/records/record.repo";
import Handler from "@app/server/middlewares/handler";
import { Request, Response } from 'express';
import { controller, httpPost, request, requestBody, response } from "inversify-express-utils";
import HttpStatus from 'http-status-codes';

@controller("/records")
export default class RecordsController {
  constructor() {}

  @httpPost("/",  )
  async getAllRecords(
    @request() req: Request,
    @response() res: Response,
    @requestBody() body: OptionsDTO
  ) {
    try {
      const data = await RecordsRepository.GetAllRecords(body);
      return Handler.success(res, HttpStatus.OK, data)
    } catch (error) {
        return Handler.error(res, HttpStatus.BAD_REQUEST, error)
    }
  }
}
