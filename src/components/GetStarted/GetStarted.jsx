import React from "react";
import { StyledGetStarted } from "./GetStarted.style";
import { Button, Wrapper } from "../../App.style";

const GetStarted = () => {
	return (
		<StyledGetStarted>
			<Wrapper className="wrapper">
				<h1>Simplify how your team works today.</h1>
				<Button white shadow>
					Get Started
				</Button>
			</Wrapper>
		</StyledGetStarted>
	);
};

export default GetStarted;
