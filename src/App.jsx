import React, { useState } from "react";
import { Navbar, Hero, About, GetStarted, Footer } from "./components";
import { GlobalStyles, Wrapper, Mask, StyledApp } from "./App.styles";

const App = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<StyledApp>
			<GlobalStyles open={menuOpen} />
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Wrapper>
				<Hero />
				<About />
			</Wrapper>
			<GetStarted />
			<Footer />
			<Mask open={menuOpen} />
		</StyledApp>
	);
};

export default App;
