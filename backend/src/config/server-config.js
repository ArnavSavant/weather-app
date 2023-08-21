const dotenv = require("dotenv");

dotenv.config();

module.exports = {
	PORT: parseInt(process.env.PORT),
	WEATHER_API_KEY: process.env.WEATHER_API_KEY,
	ONE_CALL_API_KEY: process.env.ONE_CALL_API_KEY,
};
