import styled, { css } from "styled-components";

export const Button = styled.button`
	padding: 0.7rem 1.9rem;
	border-radius: 100px;
	color: white;
	background: var(--primary);
	-webkit-box-shadow: 0px 10px 19px -9px var(--primary);
	-moz-box-shadow: 0px 10px 19px -9px var(--primary);
	box-shadow: 0px 10px 19px -9px var(--primary);
	${(props) =>
		props.white &&
		css`
			font-weight: 700;
			color: var(--primary);
			background: var(--light-gray);
			-webkit-box-shadow: 0px 10px 19px -9px var(--dark-blue);
			-moz-box-shadow: 0px 10px 19px -9px var(--dark-blue);
			box-shadow: 0px 10px 19px -9px var(--dark-blue);
		`}
`;
