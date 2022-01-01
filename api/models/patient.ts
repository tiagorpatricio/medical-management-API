const Joi = require("joi");

const patientSchema = Joi.object({
  first_name: Joi.string().min(3).required(),
  last_name: Joi.string().min(3).required(),
  age: Joi.number().required(),
  religion_id: Joi.number(),
  bloodtype_id: Joi.number().required(),
  phone_number: Joi.string(),
  individual_tax_number: Joi.string().required(),
  national_identification_number: Joi.string().required(),
  email_address: Joi.string(),
  residence_address: Joi.string().required(),
  city_of_residence: Joi.string().required(),
  post_code: Joi.string().required(),
  conditions: Joi.string(),
  currently_admitted: Joi.bool().required(),
});

export default patientSchema;
