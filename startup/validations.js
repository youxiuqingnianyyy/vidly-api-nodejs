const Joi = require("joi");

module.exports = {
  login: (loginobj) => {
    const schema = Joi.object({
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required(),
    });
    return schema.validate(loginobj);
  },
  user: (userobj) => {
    const schema = Joi.object({
      name: Joi.string().min(2).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required(),
    });
    return schema.validate(userobj);
  },
  rental: (rentalobj) => {
    const schema = Joi.object({
      customerId: Joi.objectId().required(),
      movieId: Joi.objectId().required(),
    });
    return schema.validate(rentalobj);
  },
  movie: (movieobj) => {
    const schema = Joi.object({
      title: Joi.string().min(5).max(50).required(),
      genreId: Joi.objectId().required(),
      numberInStock: Joi.number().min(0).required(),
      dailyRentalRate: Joi.number().min(0).required(),
    });
    return schema.validate(movieobj);
  },
  genre: (genreobj) => {
    const schema = Joi.object({
      name: Joi.string().min(5).max(50).required(),
    });
    return schema.validate(genreobj);
  },
  customer: (customerobj) => {
    const schema = Joi.object({
      name: Joi.string().min(5).max(50).required(),
      phone: Joi.string().min(5).max(50).required(),
      isGold: Joi.boolean(),
    });
    return schema.validate(customerobj);
  },
};
