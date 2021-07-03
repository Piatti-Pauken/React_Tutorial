import React from "react";
import "@ui5/webcomponents/dist/Button.js";
import "../index.css";

function Square(props) {
	return (
	<ui5-button
		className="square"
		onClick={props.onClick}
	>
		{props.value}
	</ui5-button>
	);
}
export default Square;