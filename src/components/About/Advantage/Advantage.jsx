import React from "react";
import { StyledAdvantage } from "./Advantage.style";

const Advantage = ({ number, title, description }) => {
	return (
		<StyledAdvantage>
			<span>{number}</span>
			<h1>{title}</h1>
			<h2>{description}</h2>
		</StyledAdvantage>
	);
};

export default Advantage;
