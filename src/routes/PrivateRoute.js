/*
	Anyone that isn't authenticated can not access the pages
	protected by the PrivateRoute
*/

import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { is_logged } from "../auth";

export default function PrivateRoute({ path, children }) {
	return (
		<Route path={path}>{is_logged() ? children : <Redirect to="/" />}</Route>
	);
}

PrivateRoute.propTypes = {
	path: PropTypes.string.isRequired,
	children: PropTypes.object.isRequired,
};
