import React from "react";

const SnackCards = ({ snacks }) => {
	return (
		<>
			{snacks.map((snacks) => {
				return <p>{snacks.name}</p>;
			})}
		</>
	);
};

export default SnackCards;
