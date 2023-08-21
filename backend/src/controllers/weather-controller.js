const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const { weatherService } = require("../services");
async function getWeather(req, res) {
	try {
		const weatherData = await weatherService.getWeather({
			cityName: req.params.city,
			units: req.params.units,
		});
		SuccessResponse.messages = "Weather fetched successfully";
		SuccessResponse.data = weatherData;
		return res.status(StatusCodes.OK).json(SuccessResponse);
	} catch (error) {
		console.log(error);
		ErrorResponse.error = error;
		return res.status(error.statusCode).json(ErrorResponse);
	}
}

async function getForecast(req, res) {
	try {
		const forecastData = await weatherService.getForecast({
			cityName: req.params.city,
			exclude: "current,minutely,alerts",
			units: req.params.units,
		});
		SuccessResponse.messages = "Weather Forecast fetched successfully";
		SuccessResponse.data = forecastData;
		return res.status(StatusCodes.OK).json(SuccessResponse);
	} catch (error) {
		console.log(error);
		ErrorResponse.error = error;
		return res.status(error.statusCode).json(ErrorResponse);
	}
}

module.exports = {
	getWeather,
	getForecast,
};
