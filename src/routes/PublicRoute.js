/*
	Anyone that is authenticated can not access the pages
	protected by the PublicRoute
*/

import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { is_logged } from "../auth";

export default function PublicRoute({ path, children }) {
	return (
		<Route path={path}>
			{is_logged() ? <Redirect to="/reception" /> : children}
		</Route>
	);
}

PublicRoute.propTypes = {
	path: PropTypes.string.isRequired,
	children: PropTypes.object.isRequired,
};