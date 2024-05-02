import React, { useState } from "react";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

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
		<BootstrapNavbar
			expanded={expand}
			fixed="top"
			expand="md"
			className={navColour ? "sticky" : "navbar"}>
			<Container className="container">
				<BootstrapNavbar.Brand href="/" className="d-flex ">
					<h3 className="img-fluid logo" alt="brand">
						Beksultan
					</h3>
				</BootstrapNavbar.Brand>
				<BootstrapNavbar.Toggle
					aria-controls="responsive-navbar-nav"
					onClick={() => {
						updateExpanded(expand ? false : "expanded");
					}}>
					{/* burger */}
					<span></span>
					<span></span>
					<span></span>
					{/* burger */}
				</BootstrapNavbar.Toggle>
				<BootstrapNavbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto d-flex" defaultActiveKey="#home">
						<Nav.Item>
							<Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
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

						<Nav.Item className="fork-btn">
							<Button href="https://github.com/AbdurashitovBeksultan">
								<FaGithub style={{ fontSize: "1.1em" }} />
							</Button>
						</Nav.Item>
					</Nav>
				</BootstrapNavbar.Collapse>
			</Container>
		</BootstrapNavbar>
	);
}

export default CustomNavbar;
