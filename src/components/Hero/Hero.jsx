import React from "react";
import heroImage from "../../assets/illustration-intro.svg";
import { Button, Wrapper } from "../../App.style";
import { StyledHero } from "./Hero.styles";

const Hero = () => {
	return (
		<StyledHero>
			<Wrapper>
				<div className="container">
					<div className="image-box">
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
						<Button shadow>Get Started</Button>
					</div>
				</div>
			</Wrapper>
		</StyledHero>
	);
};

export default Hero;
