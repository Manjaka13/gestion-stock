import React, { useState, useRef } from "react";
import "./PageConnexion.scss";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
	faKey,
	faLock,
	faUnlock,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import endpoints from "../../request/endpoints";
import axios from "axios";

export default function PageConnexion() {
	const [id_timeout, set_id_timeout] = useState(null);
	const ref_error = useRef("");
	const ref_name = useRef("");
	const ref_password = useRef("");

	const set_error = (error) => {
		ref_error.current.innerText = error;
		if (id_timeout) clearTimeout(id_timeout);
		set_id_timeout(
			setTimeout(() => {
				ref_error.current.innerText = "";
			}, 4000)
		);
	};

	const control_form = (e) => {
		e.preventDefault();
		const name = ref_name.current.value;
		const password = ref_password.current.value;
		let error = "";
		if (name.length < 3) error = "Le nom doit faire plus de 2 caractères.";
		else if (password.length < 3)
			error = "Le mot de passe doit faire plus de 2 caractères.";
		if (error) set_error(error);
		else {
			axios
				.post(endpoints.base_url + endpoints.signin, {
					name: name,
					password: password,
				})
				.then((res) => {
					const response = res.data;
					if (response.status === 0) set_error(response.message);
					else console.log(response.message, response.token);
				})
				.catch((e) => set_error(e.message));
		}
	};

	return (
		<section className="page-connexion">
			<div className="window">
				<div className="head">
					<h2 className="title-sm title">
						<Icon icon={faLock} /> Connexion
					</h2>
				</div>
				<div className="separator"></div>
				<form className="form" onSubmit={control_form}>
					<div className="form__group">
						<div className="icon">
							<Icon icon={faUser} />
						</div>
						<input
							className="input name"
							ref={ref_name}
							type="text"
							placeholder="Votre nom"
						/>
					</div>
					<div className="form__group">
						<div className="icon">
							<Icon icon={faKey} />
						</div>
						<input
							className="input password"
							ref={ref_password}
							type="password"
							placeholder="Votre mot de passe"
						/>
					</div>
					<button className="submit">
						<Icon icon={faUnlock} /> Se connecter
					</button>
				</form>
				<p className="error" ref={ref_error}></p>
			</div>
		</section>
	);
}
