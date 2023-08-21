import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
function Input({ units, setUnits, setQuery }) {
	const [city, setCity] = useState("");
	const handleSearchClick = () => {
		if (city != "") {
			setQuery({ city: city });
		}
	};
	// const handleLocationClick = () => {
	// 	if (navigator.geolocation) {
	// toast.info("Fetching users location.");
	// 		navigator.geolocation.getCurrentPosition((position) => {
	// 			let lat = position.coords.latitude;
	// 			let lon = position.coords.longitude;

	// 			setQuery({ lat, lon });
	// 		});
	// 	}
	// };
	return (
		<div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 my-8">
			<div className="flex flex-row w-full md:w-3/4 items-center justify-center space-x-5">
				<input
					value={city}
					onChange={(e) => {
						setCity(e.currentTarget.value);
					}}
					type="text"
					placeholder="Search for city...."
					className="text-xl md:text-2xl font-light p-3 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
				/>
				<UilSearch
					size={28}
					className="text-white cursor-pointer transition ease-out hover:scale-125"
					onClick={handleSearchClick}
				/>
				<UilLocationPoint
					size={28}
					className="text-white cursor-pointer transition ease-out hover:scale-125"
					// onClick={handleLocationClick}
				/>
			</div>

			<div className="flex flex-row w-full md:w-1/4 items-center justify-center space-x-5">
				<button
					name="metric"
					className="text-2xl text-white font-light transition ease-out hover:scale-125"
					onClick={() => {
						setUnits("metric");
					}}
				>
					°C
				</button>
				<p className="text-2xl text-white mx-2">|</p>
				<button
					name="imperial"
					className="text-2xl text-white font-light transition ease-out hover:scale-125"
					onClick={() => {
						setUnits("imperial");
					}}
				>
					°F
				</button>
			</div>
		</div>
	);
}

export default Input;
