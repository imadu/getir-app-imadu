import { Document } from "mongoose";

export interface IRecords extends Document {
  key: string;
  totalCount: number;
  createdAt: Date;
}
