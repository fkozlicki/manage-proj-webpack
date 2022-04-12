import React from "react";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import close from "../../assets/icon-close.svg";

import { StyledNavbar } from "./Navbar.styles";

const Navbar = ({ menuOpen, setMenuOpen }) => {
	return (
		<StyledNavbar open={menuOpen}>
			<a href="#">
				<img src={logo} alt="logo image" width="105" height="18" />
			</a>

			<ul>
				<li>Pricing</li>
				<li>Product</li>
				<li>About Us</li>
				<li>Careers</li>
				<li>Community</li>
			</ul>

			<button className="get-started-btn">Get Started</button>

			<button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
				<img src={menuOpen ? close : hamburger} alt="hamburger image" />
			</button>
		</StyledNavbar>
	);
};

export default Navbar;
