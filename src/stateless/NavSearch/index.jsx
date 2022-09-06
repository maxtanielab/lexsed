import React from "react";
import "./NavSearch.scss";

const NavSearch = ({ proName }) => {
	return (
		<div className="shadow-nav-search">
			<div id="nav-search">
				<form method="post" action="/" className="nav-search-container">
					<input
						// ref={textInput}
						type="text"
						placeholder={`Rechercher un ${
							proName === undefined || proName === null ? "" : proName
						}`}
					/>
					<button>O</button>
				</form>
			</div>
		</div>
	);
};

export default NavSearch;
