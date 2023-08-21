const express = require("express");
const router = express.Router();
const { weatherController } = require("../../controllers");
const { weatherMiddleware } = require("../../middlewares");
router.get(
	"/:city/:units",
	weatherMiddleware.validateWeatherRequest,
	weatherController.getWeather
);
router.get(
	"/forecast/:city/:units",
	weatherMiddleware.validateWeatherRequest,
	weatherController.getForecast,
);

module.exports = router;
