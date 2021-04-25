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
import Spinner from "../Spinner/Spinner";
import { login } from "../../auth";
import { useHistory } from "react-router-dom";

export default function PageConnexion() {
	const history = useHistory();
	const [loading, set_loading] = useState(false);
	const [id_timeout, set_id_timeout] = useState(null);
	const ref_error = useRef("");
	const ref_name = useRef("");
	const ref_password = useRef("");
	const cn_submit = loading ? "submit submit--disabled" : "submit";
	const loading_spinner = loading ? <Spinner className="loading" /> : "";
	const set_error = (error) => {
		ref_error.current.innerText = error;
		if (id_timeout) clearTimeout(id_timeout);
		set_id_timeout(
			setTimeout(() => {
				ref_error.current.innerText = "";
			}, 3000)
		);
	};

	const control_form = (e) => {
		e.preventDefault();
		if (!loading) {
			const name = ref_name.current.value;
			const password = ref_password.current.value;
			let error = "";
			if (name.length < 3) error = "Le nom doit faire plus de 2 caractères.";
			else if (password.length < 3)
				error = "Le mot de passe doit faire plus de 2 caractères.";
			if (error) set_error(error);
			else {
				set_loading(true);
				axios
					.post(endpoints.base_url + endpoints.signin, {
						name: name,
						password: password,
					})
					.then((res) => {
						const response = res.data;
						set_loading(false);
						if (response.status === 0) set_error(response.message);
						else {
							login(response.message);
							history.push("/reception");
						}
					})
					.catch((e) => {
						set_error(e.message);
						set_loading(false);
					});
			}
		} else set_error("Veuillez patienter...");
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
					<div className="bot">
						<button className={cn_submit}>
							<Icon icon={faUnlock} /> Se connecter
						</button>
						{loading_spinner}
					</div>
				</form>
				<p className="error" ref={ref_error}></p>
			</div>
		</section>
	);
}
