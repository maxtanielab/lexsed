import React from "react";
import AboutCard from "./AboutCard";
import "./AboutLexsed.scss";

const AboutLexsed = () => {
	return (
		<section id="about-lexsed" className="section-content">
			<div className="container">
				<h2 className="title-section ta-center">Qui est LEXSED ?</h2>
				<p className="section-description ta-center">
					LEXSED Legaltech est la première plateforme de prise de rendez-vous
					avec les Avocats, les Huissiers et les Notaires et entièrement
					gratuite. Cette plateforme contribue aux l’atteinte des objectifs de
					développement durables (ODD) de l’ONU à savoir:
				</p>
				<div className="about-card-content d-flex space-between gap-20">
					<AboutCard
						img="./images/communication.png"
						alt="Communication"
						description="Simplicité"
						presentation="Jamais prendre un rendez-vous n’a jamais été aussi simple et efficace.  Nous simplifions la prise de rendez-vous direct avec le professionnel de votre choix inscrit sur LEXSED.
						Nous voulons simplifier l’accès aux professionnels du droit.
						."
					/>
					<AboutCard
						img="./images/timer.png"
						alt="Timer"
						description="Economie"
						presentation="Nous contribuons à votre économie par la gratuité de la prise de rendez-vous avec le professionnel de votre choix. 
						Nous voulons vous faire rentabiliser."
					/>
					<AboutCard
						img="./images/carbon-light.png"
						alt="Carbon light"
						description="Fiabilité"
						presentation="Nous contribuons à votre économie par la gratuité de la prise de rendez-vous avec le professionnel de votre choix. 
						Nous voulons vous faire rentabiliser
						"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutLexsed;
