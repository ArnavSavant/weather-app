import React from "react";
import { iconFromUrl } from "../services/weatherService";

function Forecast({ title, items }) {
	return (
		<div>
			<div className="flex items-center justify-start mt-8">
				<p className="text-white font-medium text-xl uppercase">{title}</p>
			</div>
			<hr className="my-3" />
			<div className="flex flex-col md:flex-row items-center justify-between text-white space-y-5 md:space-y-0">
				{items.map((item) => {
					return (
						<div className="flex flex-col items-center justify-center mb-5 md:mb-0">
							<p className="font-light text-base">{`${item.title}`}</p>
							<img
								src={iconFromUrl(item.icon)}
								className="w-16 my-2"
								alt="Weather Icon"
							/>
							<p className="font-medium text-xl">{`${item.temp.toFixed()}°`}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Forecast;
