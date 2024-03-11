import { Routes, Route } from "react-router-dom";
import Sales from "../pages/sales/Sales";
import Home from "../pages/home/Home";
import Branch from "../pages/branch/Branch";

const MainRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="sales" element={<Sales />} />
				<Route path="/branch" element={<Branch />} />
			</Routes>
		</>
	);
};

export default MainRoutes;