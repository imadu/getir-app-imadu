import { Schema, SchemaTypes } from "mongoose";

const RecordsSchema = new Schema({
  key: SchemaTypes.String,
  totalCount: SchemaTypes.Number,
  createdAt: SchemaTypes.Date,
});

export default RecordsSchema;
