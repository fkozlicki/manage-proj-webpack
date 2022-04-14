import styled from "styled-components";

export const StyledAdvantage = styled.div`
	display: grid;
	grid-template-columns: min-content auto;
	align-items: center;
	row-gap: 1rem;
	column-gap: 1rem;

	margin-bottom: 2rem;

	span {
		position: relative;
		z-index: 3;

		padding: 0.575rem 1.5rem;
		color: white;
		font-weight: 700;
		border-radius: 20px;
		background: var(--primary);
	}

	h1 {
		position: relative;
		font-size: 0.95rem;
		z-index: 2;

		&:before {
			content: "";
			width: calc(100% + 3rem);
			height: 100%;
			padding: 0.575rem 0;

			background: var(--pale-red);
			position: absolute;
			top: -0.575rem;
			left: -2rem;
			z-index: -2;
		}
	}
	h2 {
		font-size: 0.875rem;
		line-height: 2;
		color: var(--gray-blue);
		font-weight: 400;

		grid-column: 1 / span 2;
	}

	@media (min-width: 768px) {
		h1 {
			&:before {
				display: none;
			}
		}
		h2 {
			grid-column: 2;
		}
	}
`;
