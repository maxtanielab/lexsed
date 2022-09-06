import React from "react";
import CardsAvis from "../CardsAvis";
import "./TemoignagesPros.scss";

const TemoignagesPros = () => {
	return (
		<section id="temoignages-pros" className="section-content">
			<div className="container">
				<h2 className="title-section ta-center">
					Témoignages des professionnels
				</h2>
				<p className="section-description ta-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
				<div className="cards-avis-content d-flex jc-center gap-30">
					<CardsAvis
						img="https://media.istockphoto.com/photos/success-happens-the-moment-you-believe-it-will-picture-id1262964438?b=1&k=20&m=1262964438&s=170667a&w=0&h=rgmdwXyMrmNuY_3BlmBFI0MdeayurqAjQSvweG4Htso="
						name="Samuel Bukasa"
						postName="Huissier de justice"
						stars="./images/stars-5.png"
						comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lobortis elit velit, est elementum interdum nibh. "
					/>
					<CardsAvis
						img="https://media.istockphoto.com/photos/its-got-all-the-functionality-i-need-and-more-picture-id500224094?b=1&k=20&m=500224094&s=170667a&w=0&h=Ryz4U_5hMUXkxfcflBKymJgrzTSrOQvYXDQCfiMMj6U="
						name="Patricia Bakongo"
						postName="Notaire"
						stars="./images/stars-4-edemie.png"
						comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lobortis elit velit, est elementum interdum nibh. "
					/>
					<CardsAvis
						img="https://media.istockphoto.com/photos/shes-always-coming-up-with-new-ideas-picture-id536686446?b=1&k=20&m=536686446&s=170667a&w=0&h=9w4EXw6JKvbBzsheBbBl5_8HesPJTi3_m3RzVwJFQlw="
						name="Pauline Saint-Paul"
						postName="Avocate"
						stars="./images/stars-4-edemie.png"
						comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lobortis elit velit, est elementum interdum nibh. "
					/>
				</div>
			</div>
		</section>
	);
};

export default TemoignagesPros;
