import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn,FaTelegram } from "react-icons/fa";

function Footer() {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<Container fluid className="footer">
			<Row>
				<Col md="4" className="footer-copywright">
					<h3>Designed by Beksultan</h3>
				</Col>
				<Col md="4" className="footer-copywright">
					<h3>Thank you © {year} Beksultan</h3>
				</Col>
				<Col md="4" className="footer-body">
					<ul className="footer-icons">
						<li className="social-icons">
							<a
								href="https://github.com/AbdurashitovBeksultan"
								style={{ color: "white" }}
								// target="_blank"
								rel="noopener noreferrer">
								<AiFillGithub />
							</a>
						</li>
						<li className="social-icons">
							<a
								href=""
								style={{ color: "white" }}
								// target="_blank"
								rel="noopener noreferrer">
								<FaTelegram/>
							</a>
						</li>
						
						<li className="social-icons">
							<a
								href="https://www.instagram.com__17__09__b"
								style={{ color: "white" }}
								// target="_blank"
								rel="noopener noreferrer">
								<AiFillInstagram />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
