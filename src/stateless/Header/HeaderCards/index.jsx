import React from "react";
import Cards from "./Cards";
import "./HeaderCards.scss";

const data = [
	{
		id: "avocat",
		cardsContent: [
			{
				link: "Link",
				name: "Transiger",
				icon: "icon"
			},
			{
				link: "Link",
				name: "Mandataire Transaction Immobilière ",
				icon: "icon"
			},
			{
				link: "Link",
				name: "S'informer sur son Dossier",
				icon: "icon"
			},

			{
				link: "Link",
				name: "Exécution de décision",
				icon: "icon"
			},
			{
				link: "Link",
				name: "Demande de Médiation",
				icon: "icon"
			}
		]
	},
	{
		id: "notaire",
		cardsContent: [
			{
				link: "Link",
				name: "Authentifier un acte",
				icon: "icon"
			},
			{
				link: "Link",
				name: "Négociation",
				icon: "icon"
			},
			{
				link: "Link",
				name: "Testament",
				icon: "icon"
			},
			{
				link: "Link",
				name: "Copie Exécutoire Expédition",
				icon: "icon"
			},
			{
				link: "Link",
				name: "Demande de Médiation",
				icon: "icon"
			}
		]
	},
	{
		id: "huissier",
		cardsContent: [
			{
				link: "Link",
				name: "Demande d'acte Signifier un acte",
				icon: "icon"
			},

			{
				link: "Link",
				name: "Règlement de jeux concours",
				icon: "icon"
			},
			{
				link: "Link",
				name: "Recouvrement judiciaire",
				icon: "icon"
			},
			{
				link: "Link",
				name: "PV de Constat",
				icon: "icon"
			},
			{
				link: "Link",
				name: "Exécution de décision Médiation",
				icon: "icon"
			}
		]
	}
];

const HeaderCards = ({ proName }) => {
	return (
		<div id="header-cards">
			<div className="first-block"></div>
			<div className="second-block"></div>
			<div className="cards-content" id={proName}>
				<div className="container d-flex">
					{data.map((datas) => {
						if (datas.id.includes(proName)) {
							return datas.cardsContent.map((card) => {
								return (
									<Cards link="Link" text={card.name} bgColor={card.bgColor} />
								);
							});
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default HeaderCards;
