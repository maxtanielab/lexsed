import React from "react";
import "./Header.scss";

const Header = ({ children }) => {
	return (
		<header id="header">
			<div className="container d-flex">
				<div className="header-bg"></div>
				<div className="header-find-pro-content">{children}</div>
			</div>
		</header>
	);
};

export default Header;
