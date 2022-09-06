import React from "react";
import "./HomeContent.scss";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const HomeContent = ({ titlePost, description, link, btnText }) => {
	return (
		<div className="content-center">
			<div className="content">
				<h2 className="title-post uppercase">{titlePost}</h2>
				<p className="txt-description-post">
					<Typewriter
						options={{
							strings: description,
							autoStart: true,
							loop: true,
							delay: 75,
							pauseFor: 300
						}}
					/>
				</p>
				<Link to={`/${link}`} className="btn-access-website uppercase">
					{btnText}
				</Link>
			</div>
		</div>
	);
};

export default HomeContent;
