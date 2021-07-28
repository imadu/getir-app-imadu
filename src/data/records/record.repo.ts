import mongoose from "mongoose";
import { OptionsDTO } from "./record.dto";
import { IRecords } from "./record.model";
import RecordsSchema from "./record.schema";

class RecordsRepository {
  private recordModel = mongoose.model<IRecords>("Records", RecordsSchema);
  constructor() {}

  async GetAllRecords(options: OptionsDTO) {
    try {
      const query = {
        $match: {
          $expr: {
            $and: [
              { $gte: [{ $sum: "$counts" }, options.minCount] },
              { $lte: [{ $sum: "$counts" }, options.maxCount] },
              { createdAt: { $gt: options.startDate, $lt: options.endDate } },
            ],
          },
        },
      };

      const data = await this.recordModel
        .aggregate()
        .match(query.$match)
        .addFields({ totalCount: { $sum: "$counts" } })
        .project({
            "key": true,
            "createdAt": true,
            "totalCount": true,
        });
        return data
    } catch (error) {
      return error;
    }
  }
}
export default new RecordsRepository()