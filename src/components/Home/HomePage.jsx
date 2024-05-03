import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram, FaFacebook } from "react-icons/fa";
import styled from "styled-components";

function HomePage() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>
							Коротко о<span className="purple"> себе </span>
						</h1>
						<p className="home_about">
							Я являюсь опытным Frontend, разработчиком со знаниями,
							<br />
							<br />
							Html, Css, JavaScript, ReactJs, Redux, Redux Toolkit, REST API,
							Firebase и Axios,
							<br />
							<br />
							<p>
								Git, GitHub, Formik, Tailwind, Webpack, Adaptive и Response,
								Styled Components, Toastify
							</p>
							Figma, NextJs, Typescript, Sass
							<br />
							<br />
							Подробнее вы можете узнать на странице :
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<h1>
							Мои социальные<span className="purple"> сети</span>
						</h1>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://github.com/AbdurashitovBeksultan"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons">
									<AiFillGithub />
								</a>
							</li>
							<li className="social-icons">
								<a
									href=""
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons">
									<FaFacebook />
								</a>
							</li>
							<li className="social-icons">
								<a
									href=""
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons">
									<FaLinkedinIn />
								</a>
							</li>
							<li className="social-icons">
								<a
									href=""
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons">
									<AiFillInstagram />
								</a>
							</li>
							<li className="social-icons">
								<a
									href=""
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons">
									<FaTelegram />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default HomePage;


const MyImg = styled.img`
	border-radius: 2rem;
	width: 70%;
	cursor: pointer;
`;
