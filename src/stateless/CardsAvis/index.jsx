import React from "react";
import "./CardsAvis.scss";

const CardsAvis = ({ img, alt, name, postName, stars, comment }) => {
	return (
		<div id="cards-avis">
			<img class="img-profil" src={img} alt={alt} />
			<div className="infos-content">
				<h2 className="name">{name}</h2>
				<p className="post-name">{postName}</p>
			</div>
			<div className="stars-content">
				<img src={stars} alt="Stars" />
			</div>
			<div className="comment-content">
				<p className="comment">{comment}</p>
			</div>
		</div>
	);
};

export default CardsAvis;
