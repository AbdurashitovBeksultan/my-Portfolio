import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
	AiFillGithub,
	AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>
							Коротко<span className="purple"> о себе </span>
						</h1>
						<p className="home-about-body">
							Я являюсь опытным Frontend, разработчиком со знаниями,
							<br />
							<i>
								<b className="purple">
									Html, Css, JavaScript, ReactJs, Redux, Redux Toolkit, REST
									API, Firebase и Axios,
									<br />
									Git, GitHub, Formik, Tailwind, Webpack, Adaptive и Response,
									Styled Components, Toastify Figma, NextJs, Typescript, Sass
									{" "}
								</b>
							</i>
							<br />
							<br />
							Подробнее вы можете узнать на странице :&nbsp;
							
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img src={myImg} className="img-fluid" alt="avatar" />
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<h1>Мои Контакты </h1>
						
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://github.com/AbdurashitovBeksultan"
									rel="noreferrer"
									className="icon-colour  home-social-icons">
									<AiFillGithub />
								</a>
							</li>
							
							<li className="social-icons">
								<a
									href=""
									target="_blank"
									className="icon-colour home-social-icons">
									<AiFillInstagram />
								</a>
							</li>
							<li className="social-icons">
								<a
									href=""
									target="_blank"
									className="icon-colour home-social-icons">
									<FaTelegram/>
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
