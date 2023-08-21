const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");


function validateWeatherRequest(req, res, next) {
	if (!req.params.city) {
		ErrorResponse.messages = "Something went wrong while fetching the weather";
		ErrorResponse.error = new AppError(
			["City Name not found in the incoming request in the correct form"],
			StatusCodes.BAD_REQUEST
		);
		return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
	}
    next();
}

module.exports = {
    validateWeatherRequest,
}