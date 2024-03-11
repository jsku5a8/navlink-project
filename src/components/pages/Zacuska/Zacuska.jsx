import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Zacuska() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("https://elchocrud.pro/api/v1/mypizza/snacks")
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
					<img src={item.img} alt="" />
					<h2>{item.name}</h2>
					<p>{item.description}</p>
					<p>{item.price}</p>
					<h5>{item.weight}</h5>
				</div>
			))}
		</div>
	);
}
export default Zacuska;
