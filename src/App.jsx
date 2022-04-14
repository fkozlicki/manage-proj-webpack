import React, { useState } from "react";
import {
	Navbar,
	Hero,
	About,
	GetStarted,
	Footer,
	Testimonials,
} from "./components";
import { GlobalStyles, Mask, StyledApp } from "./App.style";

const App = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<StyledApp>
			<GlobalStyles open={menuOpen} />
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

			<Hero />
			<About />

			<Testimonials />
			<GetStarted />
			<Footer />
			<Mask open={menuOpen} />
		</StyledApp>
	);
};

export default App;
