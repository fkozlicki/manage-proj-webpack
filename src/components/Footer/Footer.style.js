import styled from "styled-components";

export const StyledFooter = styled.footer`
	background: var(--dark-blue);
	padding: 2rem 2rem;

	form {
		display: flex;
		gap: 0.5rem;

		margin-bottom: 3rem;

		input {
			flex: 1 1 80%;

			padding: 0.9rem 1.5rem;
			border-radius: 100px;
		}

		button {
			flex: 1 1 20%;
		}
	}

	.list-container {
		/* display: flex;
		flex-wrap: wrap; */
		display: flex;
		justify-content: space-between;

		padding: 0 1.5rem;
		margin-bottom: 3rem;
	}

	.link-list {
		/* flex: 1 1 50%; */
		display: flex;
		flex-direction: column;
		gap: 0.9rem;

		a {
			font-size: 0.9rem;
			font-weight: 400;
			color: var(--light-gray);
		}
	}

	.logos-container {
		display: flex;
		flex-direction: column;
		gap: 3rem;

		margin-bottom: 3rem;
	}

	.socials-container {
		display: flex;
		justify-content: space-around;

		img {
			width: 150%;
		}
	}

	.logo {
		align-self: center;
	}

	.copy {
		font-size: 0.75rem;
		text-align: center;
		color: var(--gray-blue);
	}
`;
