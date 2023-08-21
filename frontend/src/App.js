import React, { useEffect, useState } from "react";
import "./App.css";
import TopButtons from "./components/TopButtons";
import Input from "./components/Input";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [query, setQuery] = useState({ city: "shimla" });
	const [units, setUnits] = useState("metric");
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			const message = query.q ? query.q : "current location.";
			toast.info("Fetching weather for " + message);
			const weather = await getFormattedWeatherData({ ...query, units });
			toast.success(
				`Successfully fetched weather for ${weather.name}, ${weather.country}.`
			);
			console.log(weather);
			setWeather(weather);
		};
		fetchWeather();
	}, [query, units]);

	const formatBackgroundColour = () => {
		if (!weather) {
			return "from-cyan-700 to-blue-700";
		}
		const threshold = units === "metric" ? 20 : 60;
		if (weather.temp <= threshold) {
			return "from-cyan-700 to-blue-700";
		}
		return "from-yellow-700 to-orange-700";
	};
	return (
		<div
			className={`max-auto w-full min-h-screen py-5 px-4 md:px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackgroundColour()}`}
		>
			<TopButtons setQuery={setQuery} />
			<Input units setUnits={setUnits} setQuery={setQuery} />
			{weather && (
				<div>
					<TimeAndLocation weather={weather} />
					<TemperatureAndDetails weather={weather} />
					<Forecast title="Hourly Forecast" items={weather.hourly} />
					<Forecast title="Daily Forecast" items={weather.daily} />
				</div>
			)}
			<ToastContainer autoClose={2200} theme="colored" newestOnTop={true} />
		</div>
	);
}

export default App;
