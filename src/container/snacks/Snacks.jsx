import { useState, useEffect } from "react";
import { perforRequests } from "../../api/requests";
import SnackCards from "../../components/snackCards/SnackCards";

const Snacks = () => {
	const [snacks, setSnacks] = useState("");

	useEffect(async () => {}, []);
	const getSnacks = async () => {
		const response = await perforRequests("get", "snacks");
		setSnacks(response);
	};
	return (
		<>
			<h1>Snacks List</h1>
			<SnackCards snacks={snacks} />
		</>
	);
};

export default Snacks;
