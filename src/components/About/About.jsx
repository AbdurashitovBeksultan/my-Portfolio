import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Cards";
import Skill from "./Skill";
import './About.css'

function About() {
	return (
		<Container fluid className="about-section">
			<Card />
			{/* Ваш код */}
			<div className="containdiv">
			<h2 className="h1">My Skill</h2>
			<p className="text">
				{" "}
				Полностью увидеть, какие навыки я имею и выполнять для разработки
				проектов для вас
			</p>
			</div>
			<Skill />
		</Container>
	);
}

export default About;
