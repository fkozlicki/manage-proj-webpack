import styled from "styled-components";

export const StyledFooter = styled.footer`
	padding: 3rem 0;
	background: var(--dark-blue);

	.grid {
		display: grid;
		justify-content: center;
		grid-template-areas:
			"form"
			"list"
			"socials"
			"brand"
			"copy";
		row-gap: 4rem;
	}

	form {
		grid-area: form;

		display: flex;
		gap: 0.5rem;

		.input-box {
			flex: 1 1 70%;
			position: relative;
		}

		.input {
			width: 100%;
			padding: 0.9rem 1.5rem;
			border-radius: 100px;
			border: 1px solid transparent;

			&-error {
				border-color: red;
				color: red;
			}
		}

		.error {
			position: absolute;
			bottom: -50%;
			left: 1.5rem;
			color: red;
			font-style: italic;
			font-size: 0.7rem;
			font-weight: 400;
		}

		button {
			flex: 1 1 30%;
		}
	}

	.list-container {
		grid-area: list;

		display: flex;
		justify-content: space-between;
	}

	.link-list {
		display: flex;
		flex-direction: column;
		gap: 0.9rem;

		a {
			font-size: 1rem;
			font-weight: 400;
			color: var(--light-gray);

			&:hover {
				color: var(--primary);
			}
		}
	}

	.socials {
		grid-area: socials;
		display: flex;
		justify-content: space-between;
	}

	.brand {
		grid-area: brand;
		text-align: center;
	}

	.copy {
		align-self: end;
		grid-area: copy;
		font-size: 0.75rem;
		text-align: center;
		color: var(--gray-blue);
	}

	@media (min-width: 1024px) {
		.grid {
			display: grid;
			justify-content: space-between;
			align-items: start;
			grid-template-columns: max-content 0.5fr auto;
			grid-template-areas:
				"brand list form"
				"socials list copy";
			row-gap: 0;
		}
		.socials {
			align-self: end;
			justify-content: space-between;
			img {
				width: 100%;
			}
		}
	}
`;
