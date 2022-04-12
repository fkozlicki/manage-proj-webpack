import styled from "styled-components";
import mobileBg from "../../assets/bg-simplify-section-mobile.svg";
import desktopBg from "../../assets/bg-simplify-section-desktop.svg";

export const StyledGetStarted = styled.div`
	background-color: var(--primary);
	background-image: url(${mobileBg});
	background-position: left center;
	background-repeat: no-repeat;
	text-align: center;

	padding: 6rem 2rem;

	h1 {
		font-size: 2.3rem;
		text-align: center;
		color: white;

		margin-bottom: 1.5rem;
	}
`;
