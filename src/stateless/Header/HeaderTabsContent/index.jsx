import React from "react";
import { DropdownList, Combobox } from "react-widgets/";
import "react-widgets/scss/styles.scss";
import "./HeaderTabsContent.scss";

const HeaderTabsContent = ({ proName }) => {
	return (
		<div id="header-tabs-content">
			<div className="rdv-content">
				<p>
					Mon rendez-vous avec un <br /> <b className="pro-name">{proName}</b>
				</p>
			</div>
			<div className="inputs-content">
				<DropdownList
					defaultValue="Domaine de compétences"
					data={[
						"Conseils juridiques",
						"Constats",
						"Impayés  et recouvrements",
						"Jeux concours",
						"Médiation"
						// "procédure d'expulsion ",
						// "rapport locatif",
						// "Saisie-contrefaçon",
						// "Signification D’actes",
						// "Vente aux enchères"
					]}
				/>
				<DropdownList defaultValue="Choisir la région" data={[""]} />
				<Combobox
					hideCaret
					hideEmptyPopup
					data={["Red", "Yellow", "Blue", "Orange"]}
					placeholder={
						proName == "Notaire"
							? `Nom du ${proName.toLowerCase()}`
							: `Nom de l'${proName.toLowerCase()}`
					}
				/>
			</div>
		</div>
	);
};

export default HeaderTabsContent;
