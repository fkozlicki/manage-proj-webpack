import styled from "styled-components";

export const StyledHero = styled.header`
	padding: 5rem 0;

	img {
		width: 100%;
		height: auto;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 4rem;
	}

	.text-box {
		flex: 1 1 100%;
		text-align: center;
	}
	.title {
		flex: 1 1 100%;
		font-size: 2.3rem;
		color: var(--dark-blue);
		margin-bottom: 0.5rem;
	}
	.subtitle {
		font-size: 1rem;
		font-weight: 400;
		color: var(--gray-blue);
		line-height: 1.5;
		margin-bottom: 2rem;
	}

	@media (min-width: 768px) {
		align-items: center;

		.text-box {
			flex: 1 1 40%;
			order: -1;
			text-align: left;
		}
		.image-box {
			flex: 1 1 40%;
		}
	}

	@media (min-width: 1024px) {
		.title {
			font-size: 3rem;
			margin-bottom: 2rem;
		}
		.subtitle {
			margin-right: 7rem;
		}
	}
`;
