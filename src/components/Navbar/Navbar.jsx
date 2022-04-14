import React from "react";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import close from "../../assets/icon-close.svg";
import { Button } from "../../App.style";
import { StyledNavbar } from "./Navbar.styles";

const Navbar = ({ menuOpen, setMenuOpen }) => {
	return (
		<StyledNavbar open={menuOpen}>
			<a href="#">
				<img src={logo} alt="logo image" />
			</a>

			<ul>
				<li>
					<a href="#!">Pricing</a>
				</li>
				<li>
					<a href="#!">Product</a>
				</li>
				<li>
					<a href="#!">About Us</a>
				</li>
				<li>
					<a href="#!">Careers</a>
				</li>
				<li>
					<a href="#!">Community</a>
				</li>
			</ul>
			<Button shadow className="get-started-btn">
				Get Started
			</Button>

			<button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
				<img src={menuOpen ? close : hamburger} alt="hamburger image" />
			</button>
		</StyledNavbar>
	);
};

export default Navbar;
