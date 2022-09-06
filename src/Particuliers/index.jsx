import React, { useState, useEffect } from "react";
import AboutLexsed from "../stateless/AboutLexsed";
import AvisClients from "../stateless/AvisClients";
import FirstNav from "../stateless/FirstNav";
import Header from "../stateless/Header";
import HeaderCards from "../stateless/Header/HeaderCards";
import HeaderTabs from "../stateless/Header/HeaderTabs";
import NavSearch from "../stateless/NavSearch";
import NosPartenaires from "../stateless/NosPartenaires";
import NousRejoindre from "../stateless/NousRejoindre";
import SecondNav from "../stateless/SecondNav";
import TemoignagesPros from "../stateless/TemoignagesPros";

const Particuliers = () => {
	const [pro, setPro] = useState("Avocat");

	function getPro(e) {
		setPro(e.target.innerText);
	}

	return (
		<React.Fragment>
			<FirstNav />
			<SecondNav />
			<NavSearch proName={pro} />
			<Header>
				<HeaderTabs onClick={getPro} pro={pro} />
			</Header>
			<HeaderCards proName={pro.toLowerCase()} />
			<AboutLexsed />
			<NosPartenaires />
			<TemoignagesPros />
			<AvisClients />
			<NousRejoindre />
		</React.Fragment>
	);
};

export default Particuliers;
