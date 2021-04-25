import React from "react";
import PropTypes from "prop-types";
import "./Spinner.scss";

export default function Spinner({ className }) {
	const cn = "spinner " + (className || "");
	return <span className={cn}></span>;
}

Spinner.propTypes = {
	className: PropTypes.string,
};
