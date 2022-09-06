import React from "react";
import { Link } from "react-router-dom";
const Cards = ({ link, icon, text, bgColor }) => {
	return (
		<Link to={link} className="card" style={{ backgroundColor: bgColor }}>
			<div className="top-content">
				<div className="d-flex">
					<img className="icon" src="./images/book.png" alt="" />
					<img className="plus-circle" src="./images/plus-circle.png" alt="" />
				</div>
			</div>
			<div className="bottom-content">
				<b className="text">{text}</b>
			</div>
		</Link>
	);
};

export default Cards;
