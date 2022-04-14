import React, { useRef, useState } from "react";
import { StyledFooter } from "./Footer.style";
import { Button, Wrapper } from "../../App.style";
import FacebookLogo from "../../assets/icon-facebook.svg";
import PinterestLogo from "../../assets/icon-pinterest.svg";
import TwitterLogo from "../../assets/icon-twitter.svg";
import YoutubeLogo from "../../assets/icon-youtube.svg";
import InstagramLogo from "../../assets/icon-instagram.svg";
import Logo from "../../assets/logo.svg";

const Footer = () => {
	const [error, setError] = useState(false);
	const inputRef = useRef();

	const isEmail = (email) => {
		return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		);
	};

	const handleSubmit = (e) => {
		setError(false);
		e.preventDefault();

		const inputValue = inputRef.current.value;

		if (!inputValue || !isEmail(inputValue)) {
			setError(true);
			return;
		}

		inputRef.current.value = "";
	};

	return (
		<StyledFooter>
			<Wrapper>
				<div className="grid">
					<form onSubmit={handleSubmit}>
						<div className="input-box">
							<input
								ref={inputRef}
								className={`input ${error && "input-error"}`}
								type="email"
								placeholder="Updated in your inbox..."
							/>
							{error && (
								<span className="error">Please insert a valid email</span>
							)}
						</div>
						<Button type="submit">GO</Button>
					</form>
					<div className="list-container">
						<div className="link-list">
							<a href="#!">Home</a>
							<a href="#!">Pricing</a>
							<a href="#!">Products</a>
							<a href="#!">About Us</a>
						</div>
						<div className="link-list">
							<a href="#!">Careers</a>
							<a href="#!">Community</a>
							<a href="#!">Privacy Policy</a>
						</div>
					</div>

					<div className="socials">
						<a href="#!">
							<img src={FacebookLogo} alt="facebook logo" />
						</a>
						<a href="#!">
							<img src={YoutubeLogo} alt="youtube logo" />
						</a>
						<a href="#!">
							<img src={TwitterLogo} alt="twitter logo" />
						</a>
						<a href="#!">
							<img src={PinterestLogo} alt="pinterest logo" />
						</a>
						<a href="#!">
							<img src={InstagramLogo} alt="instagram logo" />
						</a>
					</div>
					<div className="brand">
						<a href="#!">
							<img src={Logo} alt="logo" />
						</a>
					</div>

					<div className="copy">Copyright 2020. All Rights Reserved</div>
				</div>
			</Wrapper>
		</StyledFooter>
	);
};

export default Footer;
