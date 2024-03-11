import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<nav>
				<Link to="/">Меню</Link>
				<Link to="/sales">Акции</Link>
				<Link to="/branch">О компании</Link>
			</nav>
		</div>
	);
};

export default Header;
