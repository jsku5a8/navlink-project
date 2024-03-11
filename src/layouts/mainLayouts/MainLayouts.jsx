import React from "react";
import Footer from "../footer/Footer";
import Header from "../haeder/Header";

const MainLayouts = ({ children }) => {
	return (
		<>
			<Header />
			<div>{children}</div>
			<Footer />
		</>
	);
};

export default MainLayouts;
