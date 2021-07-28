import joi from "joi";

export const recordValidator = joi.object({
  startDate: joi.date().required(),
  endDate: joi.date().required(),
  minCount: joi.number().required(),
  maxCount: joi.number().required(),
});
