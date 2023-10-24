const dotenv =require("dotenv");
dotenv.config();

 const errorHandler = (error, req, res, next) => {
  console.error(error);
  res.status(500).send("Something went wrong!");
};

 const tryCatch = (controller) => async (req, res, next) => {
  try {
    await controller(req, res);
  } catch (error) {
    return next(error);
  }
};
module.exports={
  tryCatch,errorHandler
}
