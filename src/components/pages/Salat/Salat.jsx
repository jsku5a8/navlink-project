import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Salat() {
	const [data, setData] = useState(null);
	useEffect(() => {
		fetch("https://elchocrud.pro/api/v1/mypizza/salads")
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);
	if (data === null) {
		return <div>Loding...</div>;
	}
	return (
		<div>
			{data.map((item) => (
				<div key={item.id}>
					<h2>{item.name}</h2>
					<p>{item.description}</p>
					<p>{item.price}</p>
					<h5>{item.weight}</h5>
					<img src={item.image} alt={item.image} />
				</div>
			))}
		</div>
	);
}
export default Salat;
