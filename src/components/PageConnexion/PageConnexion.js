import React from "react";
import "./PageConnexion.scss";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
	faKey,
	faLock,
	faUnlock,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function PageConnexion() {
	return (
		<section className="page-connexion">
			<div className="window">
				<div className="head">
					<h2 className="title-sm title">
						<Icon icon={faLock} /> Connexion
					</h2>
				</div>
				<div className="separator"></div>
				<form className="form">
					<div className="form__group">
						<div className="icon">
							<Icon icon={faUser} />
						</div>
						<input className="input name" type="text" placeholder="Votre nom" />
					</div>
					<div className="form__group">
						<div className="icon">
							<Icon icon={faKey} />
						</div>
						<input
							className="input password"
							type="password"
							placeholder="Votre mot de passe"
						/>
					</div>
					<button className="submit">
						<Icon icon={faUnlock} /> Se connecter
					</button>
				</form>
				<p className="result">Connexion result goes here</p>
			</div>
		</section>
	);
}
