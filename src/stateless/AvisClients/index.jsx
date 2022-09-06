import React from "react";
import CardsAvis from "../CardsAvis";
import "./AvisClients.scss";

const AvisClients = () => {
	return (
		<section id="avis-clients" className="section-content">
			<div className="container">
				<h2 className="title-section ta-center">Avis des clients</h2>
				<p className="section-description ta-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
				<div className="cards-avis-content d-flex jc-center gap-30">
					<CardsAvis
						img="https://media.istockphoto.com/photos/confident-businessman-in-his-office-picture-id1358280405?b=1&k=20&m=1358280405&s=170667a&w=0&h=DVwCvRxHkjalwlwDaHFSKxE-12hiTKrdGVLQKbuk2rM="
						name="Olivier David"
						postName="Comptable"
						stars="./images/stars-5.png"
						comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lobortis elit velit, est elementum interdum nibh. "
					/>
					<CardsAvis
						img="https://media.istockphoto.com/photos/happy-mature-woman-working-at-home-office-picture-id1322865830?b=1&k=20&m=1322865830&s=170667a&w=0&h=ktJpy35tinpN_IYVBO78XoCsmSWhob88c11R0z0owDQ="
						name="Prune Kingani"
						postName="Ressource humaine"
						stars="./images/stars-4-edemie.png"
						comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lobortis elit velit, est elementum interdum nibh. "
					/>
					<CardsAvis
						img="https://media.istockphoto.com/photos/living-that-urban-life-picture-id1165314750?b=1&k=20&m=1165314750&s=170667a&w=0&h=mS8qGVV2GWQ9S_9kNsBTg3ZTN5nCOfByLQkzqxOqPuQ="
						name="Jude Joseph"
						postName="Professeur"
						stars="./images/stars-4-edemie.png"
						comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lobortis elit velit, est elementum interdum nibh. "
					/>
				</div>
			</div>
		</section>
	);
};

export default AvisClients;
