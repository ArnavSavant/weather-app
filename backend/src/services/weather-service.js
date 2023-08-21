var axios = require("axios");
var { serverConfig } = require("../config");
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');
async function getWeather(data) {
	try {
		const coordinates_data = await getCoordinates(data.cityName);
		const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates_data.lat}&lon=${coordinates_data.lon}&appid=${serverConfig.WEATHER_API_KEY}&units=${data.units}`;
		const response = await axios.get(weather_url);
		const weather = response.data;
		return weather;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

async function getForecast(data) {
	try {
		const coordinates_data = await getCoordinates(data.cityName);
		const forecast_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates_data.lat}&lon=${coordinates_data.lon}&exclude=${data.exclude}&appid=${serverConfig.ONE_CALL_API_KEY}&units=${data.units}`;
		const response = await axios.get(forecast_url);
		const forecast = response.data;
		return forecast;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

async function getCoordinates(cityName) {
	try {
		const coordinates_url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${serverConfig.WEATHER_API_KEY}`;
		const response = await axios.get(coordinates_url);
		const coordinates_response = response.data
        if(coordinates_response.length == 0) {
            throw new AppError("City does not exist",StatusCodes.BAD_REQUEST);
        }
		return {
			lat: coordinates_response[0].lat,
			lon: coordinates_response[0].lon,
			country: coordinates_response[0].country,
		};
	} catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
	getWeather,
	getForecast,
};
