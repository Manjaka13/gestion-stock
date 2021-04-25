import React from "react";
import "./PageAPropos.scss";
import { useHistory } from "react-router-dom";
import { logout } from "../../auth";

export default function PageAPropos() {
	const history = useHistory();
	const cb = () => {
		logout();
		history.push("/");
	};
	return (
		<section className="page-a-apropos">
			<h1>A prpos de l'application et de VRDev</h1>
			<button onClick={cb}>Logout</button>
		</section>
	);
}
