import React from "react";

const AboutCard = ({ img, alt, description, presentation }) => {
	return (
		<div className="about-card">
			<div className="top-content d-flex gap-30">
				<img className="about-card-img" src={img} alt={alt} />
				<h2 className="txt-description">{description}</h2>
			</div>
			<div className="bottom-content">
				<p className="txt-presentation">{presentation}</p>
			</div>
		</div>
	);
};

export default AboutCard;
