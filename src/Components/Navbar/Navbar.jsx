import React from "react";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">काम गर</div>
			<ul className="app__navbar-links">
				{["tasks", "notes"].map((item) => (
					<li className="app__flex p-text" key={`link-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
