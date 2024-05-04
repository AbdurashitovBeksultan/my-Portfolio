import React, { useState } from "react";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "./CustomNavbar.css";

function CustomNavbar() {
	const [expand, updateExpanded] = useState(false);
	const [navColour, updateNavbar] = useState(false);

	function scrollHandler() {
		if (window.scrollY >= 20) {
			updateNavbar(true);
		} else {
			updateNavbar(false);
		}
	}

	window.addEventListener("scroll", scrollHandler);

	return (
		<BootstrapNavbar expanded={expand} fixed="top" expand="md" className="body">
			<Container className="container">
				<BootstrapNavbar.Brand href="/">
					<h3 className="h3">Beksultan</h3>
				</BootstrapNavbar.Brand>

				<div className="divContainer">
					<BootstrapNavbar.Collapse>
						<Nav className="navcontain" defaultActiveKey="#home">
							<Nav.Item>
								<Nav.Link
									as={Link}
									to="/"
									onClick={() => updateExpanded(false)}>
									Home
								</Nav.Link>
							</Nav.Item>

							<Nav.Item>
								<Nav.Link
									as={Link}
									to="/about"
									onClick={() => updateExpanded(false)}>
									About Me
								</Nav.Link>
							</Nav.Item>

							<Nav.Item>
								<Nav.Link
									as={Link}
									to="/project"
									onClick={() => updateExpanded(false)}>
									My Projects
								</Nav.Link>
							</Nav.Item>

							<Nav.Item>
								<Nav.Link
									as={Link}
									to="/resume"
									onClick={() => updateExpanded(false)}>
									Resume
								</Nav.Link>
							</Nav.Item>

							<Nav.Item>
								<Button href="https://github.com/AbdurashitovBeksultan">
									<FaGithub style={{ fontSize: "1.1em" }} />
								</Button>
							</Nav.Item>
						</Nav>
					</BootstrapNavbar.Collapse>
				</div>
			</Container>
		</BootstrapNavbar>
	);
}

export default CustomNavbar;
