import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./styles/index.scss";
import PageAPropos from "./components/PageAPropos/PageAPropos";
import PageBilan from "./components/PageBilan/PageBilan";
import PageConnexion from "./components/PageConnexion/PageConnexion";
import PageProduction from "./components/PageProduction/PageProduction";
import PageReception from "./components/PageReception/PageReception";
import PageStock from "./components/PageStock/PageStock";
import PageVente from "./components/PageVente/PageVente";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<>
				<nav>
					<ul>
						<li>
							<Link to="/">Connexion</Link>
						</li>
						<li>
							<Link to="/reception">Réception</Link>
						</li>
						<li>
							<Link to="/production">Production</Link>
						</li>
						<li>
							<Link to="/stock">Stock</Link>
						</li>
						<li>
							<Link to="/vente">Vente</Link>
						</li>
						<li>
							<Link to="/bilan">Bilan</Link>
						</li>
						<li>
							<Link to="/a-propos">A propos</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/reception">
						<PageReception />
					</Route>
					<Route path="/production">
						<PageProduction />
					</Route>
					<Route path="/stock">
						<PageStock />
					</Route>
					<Route path="/vente">
						<PageVente />
					</Route>
					<Route path="/bilan">
						<PageBilan />
					</Route>
					<Route path="/a-propos">
						<PageAPropos />
					</Route>
					<Route path="/">
						<PageConnexion />
					</Route>
				</Switch>
			</>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
