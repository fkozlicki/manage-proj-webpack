import styled from "styled-components";
import mobileBg from "../../assets/bg-simplify-section-mobile.svg";
import desktopBg from "../../assets/bg-simplify-section-desktop.svg";

export const StyledGetStarted = styled.div`
	background-color: var(--primary);
	background-image: url(${mobileBg});
	background-position: left center;
	background-repeat: no-repeat;
	text-align: center;

	padding: 6rem 0;

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
	}

	h1 {
		font-size: 2.3rem;
		text-align: center;
		color: white;
	}

	@media (min-width: 1024px) {
		padding: 4rem 0;

		background-image: url(${desktopBg});
		background-position: center;

		.wrapper {
			flex-direction: row;
			justify-content: space-between;
		}

		h1 {
			text-align: left;
		}
	}
`;
