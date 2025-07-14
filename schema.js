const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        // image: Joi.string().allow("", null)
        image: Joi.object({
            filename: Joi.string().allow('', null),
            url: Joi.string().uri().allow('', null),
        }).optional().allow(null).unknown(true),

        // // Add this geometry validation
        // geometry: Joi.object({
        //     type: Joi.string().valid('Point').required(),
        //     coordinates: Joi.array()
        //         .items(Joi.number().required())
        //         .length(2)
        //         .required()
        // }).required()
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),
});