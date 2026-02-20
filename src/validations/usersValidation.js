import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

export const bodySchema = Joi.object({
  name: Joi.string().min(2).max(34).required(),
  email: Joi.string().max(68).email().required(),
  password: Joi.string().min(8).max(128).required(),
});

// Кастомний валідатор для ObjectId
const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

// Схема для перевірки параметра userId
export const userIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    userId: Joi.string().custom(objectIdValidator).required(),
  }),
};
