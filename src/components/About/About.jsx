import React from "react";
import { Wrapper } from "../../App.style";
import { StyledAbout } from "./About.style";
import Advantage from "./Advantage/Advantage";

const About = () => {
	return (
		<StyledAbout>
			<Wrapper>
				<div className="container">
					<div className="text-box">
						<h1 className="title">What’s different about Manage? </h1>
						<h1 className="subtitle">
							Manage provides all the functionality your team needs, without the
							complexity. Our software is tailor-made for modern digital product
							teams.
						</h1>
					</div>
					<div className="advantages-box">
						<Advantage
							number={"01"}
							title={"Track company-wide progress"}
							description={
								"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
							}
						/>
						<Advantage
							number={"02"}
							title={" Advanced built-in reports"}
							description={
								"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed"
							}
						/>
						<Advantage
							number={"03"}
							title={"Everything you need in one place"}
							description={
								"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
							}
						/>
					</div>
				</div>
			</Wrapper>
		</StyledAbout>
	);
};

export default About;
