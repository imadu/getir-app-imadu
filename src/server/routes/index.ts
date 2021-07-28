import { Router } from "express";
import { createValidator } from "express-joi-validation";
import RecordsController from "../controllers/records/record.controller";
import { recordValidator } from "../controllers/records/record.validator";

class IndexRoute {
  public router: Router;
  recordsController: RecordsController;
  constructor(recordsController: RecordsController) {
    this.recordsController = recordsController;
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    const expressJoi = createValidator();
    this.router.post("/", expressJoi.body(recordValidator), this.recordsController.getAllRecords)

  }
}

let recordController = new RecordsController()
export const appRoutes = new IndexRoute(recordController).router
