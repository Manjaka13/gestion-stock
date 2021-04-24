import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./styles/index.scss";

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
						<h1>Reception</h1>
					</Route>
					<Route path="/production">
						<h1>Production</h1>
					</Route>
					<Route path="/stock">
						<h1>Stock</h1>
					</Route>
					<Route path="/vente">
						<h1>Vente</h1>
					</Route>
					<Route path="/bilan">
						<h1>Bilan</h1>
					</Route>
					<Route path="/a-propos">
						<h1>A propos</h1>
					</Route>
					<Route path="/">
						<h1>Connexion</h1>
					</Route>
				</Switch>
			</>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
