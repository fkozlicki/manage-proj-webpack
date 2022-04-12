import React from "react";
import heroImage from "../../assets/illustration-intro.svg";
import { Button } from "../Button/Button.style";
import { StyledHero } from "./Hero.styles";

const Hero = () => {
	return (
		<StyledHero>
			<div>
				<img src={heroImage} alt="charts illustration" />
			</div>
			<div className="text-box">
				<h1 className="title">
					Bring everyone together to build better products.
				</h1>
				<h1 className="subtitle">
					Manage makes it simple for software teams to plan day-to-day tasks
					while keeping the larger team goals in view.
				</h1>
				<Button>Get Started</Button>
			</div>
		</StyledHero>
	);
};

export default Hero;
