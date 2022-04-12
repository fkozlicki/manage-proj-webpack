import React from "react";
import { StyledFooter } from "./Footer.style";
import { Button } from "../Button/Button.style";
import FacebookLogo from "../../assets/icon-facebook.svg";
import PinterestLogo from "../../assets/icon-pinterest.svg";
import TwitterLogo from "../../assets/icon-twitter.svg";
import YoutubeLogo from "../../assets/icon-youtube.svg";
import InstagramLogo from "../../assets/icon-instagram.svg";
import Logo from "../../assets/logo.svg";

const Footer = () => {
	return (
		<StyledFooter>
			<form>
				<input type="email" placeholder="Updated in your inbox..." />
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
			<div className="logos-container">
				<div className="socials-container">
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
				<a className="logo" href="#!">
					<img src={Logo} alt="logo" />
				</a>
			</div>
			<div className="copy">Copyright 2020. All Rights Reserved</div>
		</StyledFooter>
	);
};

export default Footer;
