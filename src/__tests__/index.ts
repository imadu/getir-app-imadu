import mongoose from "mongoose";
import dotenv from "dotenv";
import RecordsRepository from "src/data/records/record.repo";
import { OptionsDTO } from "src/data/records/record.dto";


beforeAll(async() => {
    dotenv.config();
  const globalAny: any = global;
  await mongoose.connect(
    globalAny.__MONGO_URI__,
    { useNewUrlParser: true, useCreateIndex: true },
    (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    }
  );



}, 12000)

afterAll(async () => {
    mongoose.connection.close();
  });

it('should return an array of records', async()=> {
    const options: OptionsDTO = {
        startDate: new Date("2016-01-26"),
        endDate: new Date("2018-02-02"),
        minCount: 2700,
        maxCount:3000
    }
    const recordsData = await RecordsRepository.GetAllRecords(options)
    expect(recordsData.length).toBeGreaterThan(1)
})