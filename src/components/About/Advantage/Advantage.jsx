import React from "react";
import { StyledAdvantage } from "./Advantage.style";

const Advantage = ({ number, title, description }) => {
	return (
		<StyledAdvantage>
			<div className="advantage__title-bar">
				<div className="advantage__number">{number}</div>
				<h1 className="advantage__title">{title}</h1>
			</div>
			<h1 className="advantage__description">{description}</h1>
		</StyledAdvantage>
	);
};

export default Advantage;
