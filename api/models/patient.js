const Joi = require("joi")


module.exports =  patientSchema = Joi.object({
        id: Joi.number(),
        first_name: Joi.string().min(3).required(),
        last_name: Joi.string().min(3).required(),
        age: Joi.number().required(),
        religion_id: Joi.number(),
        bloodtype_id: Joi.number().required(),
        phone_number: Joi.string(),
        email_address: Joi.string(),
        residence_address: Joi.string().required(),
        city_of_residence: Joi.string().required(),
        post_code: Joi.string().required(),
        conditions: Joi.object(),
        currently_admitted: Joi.bool()
})

