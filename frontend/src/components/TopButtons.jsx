import React from "react";

function TopButtons({setQuery}) {
	const cities = [
		{
			id: 1,
			title: "Delhi",
		},
		{
			id: 2,
			title: "Navi Mumbai",
		},
		{
			id: 3,
			title: "Pune",
		},
		{
			id: 4,
			title: "Lucknow",
		},
		{
			id: 5,
			title: "Hyderabad",
		},
	];
	return (
		<div className="flex flex-wrap items-center justify-between my-0">
			{cities.map((city) => (
				<button
					key={city.id}
					className="text-white text-lg md:text-xl font-medium m-2"
					onClick={() => {
						setQuery({ city: city.title });
					}}
				>
					{city.title}
				</button>
			))}
		</div>
	);
}

export default TopButtons;
