import styled, { css } from "styled-components";

export const StyledNavbar = styled.nav`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;

	display: flex;
	justify-content: space-between;
	align-items: center;

	width: calc(100%);
	padding: 2.5rem 1.5rem;

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
	}

	ul li {
		color: var(--dark-blue);
		font-weight: 700;
	}

	.get-started-btn {
		display: none;
	}
`;
