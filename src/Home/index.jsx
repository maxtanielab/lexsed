import React from "react";
import HomeContent from "./Home-content";
import "./Home.scss";

const Home = () => {
	const proName = ["Avocat", "Huissier", "Notaire"];
	return (
		<div id="home">
			<div className="logo">
				<img src="./images/logo-lexsed-last-version.png" alt="Logo Lexsed" />
			</div>
			<div className="d-flex home-content">
				<div className="bg-img-content">
					<div className="polygon-home-bg-img home-bg-img home-bg-img1"></div>
					<HomeContent
						titlePost="Espace particulier entreprise"
						description={proName}
						link="particuliers"
						btnText="Prendre rendez-vous"
					/>
				</div>

				<div className="bg-img-content">
					<div className="polygon-home-bg-img home-bg-img home-bg-img2"></div>

					<HomeContent
						titlePost="espace avocats, huissiers, notaires"
						description={proName}
						link="professionnels"
						btnText="Découvrir"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
