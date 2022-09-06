import React from "react";
import "./FirstNav.scss";
import { Link } from "react-router-dom";

const FirstNav = () => {
	return (
		<nav id="first-nav">
			<div className="container d-flex space-between">
				<div className="first-nav-left-content d-flex">
					<Link to="/" className="btn btn-fill">
						Prendre RDV en ligne
					</Link>
					<div className="btn btn-stroke">
						<span className="ta-right">
							226 45 65 78 98 10 <b className="ml-7 fw-bold"> BFA</b>
							<br />
							<span className="free-calling">gratuit</span>
						</span>
					</div>
				</div>

				<div className="first-nav-right-content">
					<span className="blue-secondery">Je suis </span>
					<Link to="/" className="law-link">
						Avocat -
					</Link>
					<Link to="/" className="law-link">
						Huissier -
					</Link>
					<Link to="/" className="law-link">
						Notaire
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default FirstNav;
