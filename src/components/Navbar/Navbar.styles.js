import styled, { css } from "styled-components";

export const StyledNavbar = styled.nav`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 2;

	display: flex;
	justify-content: space-between;
	align-items: center;

	width: calc(100%);
	max-width: 1100px;

	padding: 2.5rem 1rem;

	ul {
		background: white;
		flex-direction: column;
		gap: 1.5rem;

		position: absolute;
		z-index: 2;
		top: 0;
		left: 50%;
		transform: translateX(-50%) translateY(-100%);
		${(props) =>
			props.open &&
			css`
				transform: translateX(-50%) translateY(35%);
			`}
		transition: transform 300ms linear;

		padding: 3rem;
		width: calc(100% - 3rem);
		border-radius: 5px;
		text-align: center;

		a {
			color: var(--dark-blue);
			font-weight: 700;

			&:hover {
				color: var(--gray-blue);
			}
		}
	}

	.get-started-btn {
		display: none;
	}

	@media (min-width: 1024px) {
		.menu-btn {
			display: none;
		}

		.get-started-btn {
			display: block;
		}

		ul {
			all: unset;
			list-style: none;
			display: flex;
			gap: 2rem;

			a {
				font-size: 0.8rem;
				font-weight: 500;
			}
		}
	}
`;
