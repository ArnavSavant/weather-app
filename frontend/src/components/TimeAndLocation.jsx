import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
	return (
		<div>
			<div className="flex flex-col md:flex-row items-center justify-center my-8">
				<p className="text-white text-2xl md:text-3xl font-extralight mb-3 md:mb-0">
					{formatToLocalTime(dt, timezone, "cccc, dd LLL yyyy")}
				</p>
				<span className="hidden md:inline mx-2 text-white text-xl font-extralight">
					|
				</span>
				<p className="text-white text-2xl md:text-3xl font-extralight">
					{`Local Time: ${formatToLocalTime(dt, timezone, "hh:mm a")}`}
				</p>
			</div>
			<div className="flex items-center justify-center my-4">
				<p className="text-white text-4xl font-medium">{`${name}, ${country}`}</p>
			</div>
		</div>
	);
}

export default TimeAndLocation;
