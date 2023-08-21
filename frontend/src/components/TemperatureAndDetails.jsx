import React from "react";
import {
	UilArrowUp,
	UilArrowDown,
	UilTemperature,
	UilTear,
	UilWind,
	UilSun,
	UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconFromUrl } from "../services/weatherService";

function TemperatureAndDetails({
	weather: {
		dt,
		timezone,
		details,
		icon,
		temp,
		feels_like,
		humidity,
		speed,
		sunrise,
		sunset,
		temp_max,
		temp_min,
	},
}) {
	return (
		<div>
			<div className="flex items-center justify-center text-xl md:text-2xl text-cyan-300">
				<p>{details}</p>
			</div>

			<div className="flex flex-col md:flex-row items-center justify-between text-white">
				<img
					src={iconFromUrl(icon)}
					alt="Weather Icon"
					className="w-24 self-center mb-5 md:mb-0"
				/>
				<p className="text-6xl self-center mb-5 md:mb-0">{`${temp.toFixed()}°`}</p>
				<div className="flex flex-col space-y-3">
					<div className="flex font-light text-sm items-center justify-center">
						<UilTemperature size={18} className="mr-1" />
						Real Feel:
						<span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
					</div>
					<div className="flex font-light text-sm items-center justify-center">
						<UilTear size={18} className="mr-1" />
						Humidity:
						<span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
					</div>
					<div className="flex font-light text-sm items-center justify-center">
						<UilWind size={18} className="mr-1" />
						Wind:
						<span className="font-medium ml-1">{`${speed} Km/h`}</span>
					</div>
				</div>
			</div>

			<div className="flex flex-wrap justify-center space-x-3 text-white text-base py-4">
				<div className="flex items-center space-x-2 mb-2 md:mb-0">
					<UilSun />
					<p className="font-light">
						Rise:{" "}
						<span className="font-medium ml-1">
							{formatToLocalTime(sunrise, timezone, "hh:mm a")}
						</span>
					</p>
				</div>

				<p className="font-light self-center mb-2 md:mb-0">|</p>

				<div className="flex items-center space-x-2 mb-2 md:mb-0">
					<UilSunset />
					<p className="font-light">
						Set:{" "}
						<span className="font-medium ml-1">
							{formatToLocalTime(sunset, timezone, "hh:mm a")}
						</span>
					</p>
				</div>

				<p className="font-light self-center mb-2 md:mb-0">|</p>

				<div className="flex items-center space-x-2 mb-2 md:mb-0">
					<UilArrowUp />
					<p className="font-light">
						MAX:{" "}
						<span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
					</p>
				</div>

				<p className="font-light self-center mb-2 md:mb-0">|</p>

				<div className="flex items-center space-x-2 mb-2 md:mb-0">
					<UilArrowDown />
					<p className="font-light">
						MIN:{" "}
						<span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default TemperatureAndDetails;
