import React from "react";
import "./SecondNav.scss";
import { Link } from "react-router-dom";

const SecondNav = () => {
	return (
		<nav id="second-nav">
			<div className="container d-flex space-between">
				<Link to="/particuliers" className="logo">
					<img src="./images/logo-lexsed-last-version.png" alt="Logo Lexsed" />
				</Link>

				<ul className="menu d-flex gap-30">
					<li className="list-items">
						<a href="/" className="nav-list">
							Accueil
						</a>
					</li>
					<li className="list-items">
						<a href="/" className="nav-list">
							A propos
						</a>
						<ul className="sub-menu">
							<li className="submenu-list-items">
								<a href="/" className="nav-list">
									Notre équipe
								</a>
							</li>
							<li className="submenu-list-items">
								<a href="/" className="nav-list">
									Comité consultatif
								</a>
							</li>
						</ul>
					</li>
					<li className="list-items">
						<a href="/" className="nav-list">
							Guides et fiches pratiques
						</a>
						<ul className="sub-menu">
							<li className="submenu-list-items">
								<a href="/" className="nav-list">
									Actualités
								</a>
							</li>
							<li className="submenu-list-items">
								<a href="/" className="nav-list">
									Les articles
								</a>
							</li>
						</ul>
					</li>
					<li className="list-items">
						<a href="/" className="nav-list">
							Nous rejoindre
						</a>
						<ul className="sub-menu">
							<li className="submenu-list-items">
								<a href="/" className="nav-list">
									Devenir partenaire
								</a>
							</li>
							<li className="submenu-list-items">
								<a href="/" className="nav-list">
									Espace recrutement
								</a>
							</li>
							<li className="submenu-list-items">
								<a href="/" className="nav-list">
									Espace presse
								</a>
							</li>
						</ul>
					</li>
					<li className="list-items">
						<a href="/" className="nav-list">
							FAQ
						</a>
					</li>
					<li className="list-items">
						<a href="/" className="nav-list">
							Contactez-nous
						</a>
					</li>
				</ul>
				<div className="buttons-login d-flex">
					<Link to="/" className="btn-login btn-login-fill">
						Se connecter
					</Link>
					<Link to="/" className="btn-login btn-login-stroke">
						S'inscrire
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default SecondNav;
