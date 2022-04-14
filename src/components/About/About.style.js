import styled from "styled-components";

export const StyledAbout = styled.div`
	padding: 5rem 0;

	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 4rem;
	}

	.text-box {
		flex: 1 1 100%;
		text-align: center;
	}
	.advantages-box {
		flex: 1 1 100%;
		max-width: 450px;
		margin: auto;
	}

	.title {
		font-size: 1.9rem;
		line-height: 1.5;
		color: var(--dark-blue);
		margin-bottom: 1rem;
	}
	.subtitle {
		font-size: 0.9rem;
		font-weight: 400;
		line-height: 2;
		color: var(--gray-blue);
		max-width: 550px;
		margin: auto;
		margin-bottom: 3rem;
	}

	@media (min-width: 1024px) {
		.advantages-box {
			max-width: unset;
			flex: 1 1 40%;
			margin: unset;
		}
		.text-box {
			flex: 1 1 40%;
			text-align: left;
		}
		.title {
			font-size: 2.5rem;
		}
		.subtitle {
			font-size: 1rem;

			margin-right: 8rem;
		}
	}
`;
