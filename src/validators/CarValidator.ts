import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .messages({'string.pattern base': 'Value didnt match pattern'}),

    price: Joi.number().min(0).max(1000000).messages({
        'min.number': 'min price is 0',
        'max.number': 'min price is 1 000 000',
    }),

    year: Joi.number().min(1990).max(2024).messages({
        'min.number': 'min year is 1990',
        'max.number': 'min year is 2024',

    }),
}
)