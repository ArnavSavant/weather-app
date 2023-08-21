const { DateTime } = require("luxon");
const getWeatherData = async (data) => {
	try {
		const url = "api/v1/weather/" + data.city + "/" + data.units;
		return fetch(url).then((res) => res.json());
	} catch (error) {
		console.log(error);
		throw error;
	}
};
const getForecastData = async (data) => {
	try {
		const url = "api/v1/weather/forecast/" + data.city + "/" + data.units;
		return fetch(url).then((res) => res.json());
	} catch (error) {
		console.log(error);
		throw error;
	}
};
const formatCurrentWeather = async (data) => {
	try {
		const {
			coord: { lon, lat },
			main: { temp, feels_like, temp_min, temp_max, humidity },
			name,
			dt,
			sys: { country, sunrise, sunset },
			weather,
			wind: { speed },
		} = data;
		const { main: details, icon } = weather[0];
		return {
			lat,
			lon,
			temp,
			feels_like,
			temp_min,
			temp_max,
			humidity,
			name,
			dt,
			country,
			sunrise,
			sunset,
			details,
			icon,
			speed,
		};
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const formatForecastWeather = async (data) => {
	let { timezone, daily, hourly } = data;
	daily = daily.slice(1, 8).map((d) => {
		return {
			title: formatToLocalTime(d.dt, timezone, "ccc"),
			temp: d.temp.day,
			icon: d.weather[0].icon,
		};
	});
	hourly = hourly.slice(1, 8).map((h) => {
		return {
			title: formatToLocalTime(h.dt, timezone, "hh:mm a"),
			temp: h.temp,
			icon: h.weather[0].icon,
		};
	});
	return { timezone, daily, hourly };
};

const formatToLocalTime = (
	secs,
	zone,
	format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconFromUrl = (code) => {
	return `http://openweathermap.org/img/wn/${code}@2x.png`;
};

const getFormattedWeatherData = async (data) => {
	const currentWeatherData = await getWeatherData(data);
	const formattedCurrentWeather = await formatCurrentWeather(
		currentWeatherData.data
	);
	const forecastData = await getForecastData(data);
	const formattedForecastWeather = await formatForecastWeather(
		forecastData.data
	);

	return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export default getFormattedWeatherData;

export { formatToLocalTime, iconFromUrl };
