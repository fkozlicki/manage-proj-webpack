import styled, { createGlobalStyle, css } from "styled-components";
import mobileBg from "./assets/bg-tablet-pattern.svg";

export const GlobalStyles = createGlobalStyle`


    :root {
        --primary: hsl(12, 88%, 59%);
        --secondary: hsl(228, 39%, 23%);

        --gray-blue: hsl(227, 12%, 61%);
        --dark-blue: hsl(233, 12%, 13%);
        --pale-red: hsl(13, 100%, 96%);
        --light-gray: hsl(0, 0%, 98%);
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 16px;
        ${(props) =>
					props.open &&
					css`
						overflow: hidden;
					`}
    }
    input {
        border: none;
        outline: none;
    }

    button {
        font-family: 'Be Vietnam Pro', sans-serif;
        border: none;
        outline: none;
        background: none;
        cursor: pointer;
    }
    ul {
        list-style: none;
        display: flex;
    }
    a {
        text-decoration: none;
        color: inherit;
    }

`;

export const StyledApp = styled.div`
	padding-top: 102px;

	background-image: url(${mobileBg});
	background-repeat: no-repeat;
	background-position: 12vw -12vw;
	background-size: contain;
`;

export const Wrapper = styled.div`
	position: relative;

	max-width: 1100px;
	margin: auto;
	padding: 0 1rem;
`;

export const Mask = styled.div`
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transition: all 300ms linear;
	${(props) =>
		css`
			visibility: ${props.open ? "visible" : "hidden"};
			opacity: ${props.open ? 1 : 0};
		`}
	background: rgb(29,30,37);
	background: linear-gradient(
		0deg,
		rgba(29, 30, 37, 1) 0%,
		rgba(250, 250, 250, 0.0997624703087886) 100%
	);
`;
