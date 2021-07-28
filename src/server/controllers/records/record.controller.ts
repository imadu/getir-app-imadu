import { OptionsDTO } from "../../../data/records/record.dto";
import RecordsRepository from "../../../data/records/record.repo";
import Handler from "../../middlewares/handler";
import { Request, Response } from 'express';

import HttpStatus from 'http-status-codes';


export default class RecordsController {
  constructor() {}
  
  async getAllRecords(
    req: Request,
     res: Response,
  ) {
    try {
        const  body: OptionsDTO = req.body
      const data = await RecordsRepository.GetAllRecords(body);
      return Handler.success(res, HttpStatus.OK, data)
    } catch (error) {
        console.log(error)
        return Handler.error(res, HttpStatus.BAD_REQUEST, error)
    }
  }
}
