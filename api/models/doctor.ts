const Joi = require("joi");

const doctorSchema = Joi.object({
  first_name: Joi.string().min(3).required(),
  last_name: Joi.string().min(3).required(),
  age: Joi.number().required(),
  phone_number: Joi.string(),
  email_address: Joi.string(),
  residence_address: Joi.string().required(),
  city_of_residence: Joi.string().required(),
  post_code: Joi.string().required(),
  specialty_id: Joi.number().required(),
});

export default doctorSchema;
