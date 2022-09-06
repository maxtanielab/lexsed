import React from "react";
import { Link } from "react-router-dom";
import "./BoxRejoindre.scss";

const BoxRejoindre = () => {
	return (
		<div className="box-rejoindre">
			<div className="container d-flex gap-40">
				<img
					src="https://www.captaincontrat.com/hubfs/Imported_Blog_Media/Renouvellement_Bail_Commercial.jpg"
					alt=""
				/>
				<div className="content-description">
					<h2 className="title">Sed ut perspiciatis unde omnis</h2>
					<div className="description">
						<p className="para">
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
							aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem.
						</p>
						<p className="para">
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
							aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
						</p>
					</div>
					<div className="button-content">
						<Link to="/" className="btn-login btn-login-fill">
							Nous rejoindre
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BoxRejoindre;
