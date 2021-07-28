import joi from "joi";

export const recordValidator = joi.object({
  start_date: joi.date().required(),
  end_date: joi.date().required(),
  min_count: joi.number().required(),
  max_count: joi.number().required(),
});
