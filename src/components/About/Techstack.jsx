import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiGit,
	DiHtml5,
	DiCss3,
	DiSass,
	DiGithubBadge,
	DiNodejsSmall,
} from "react-icons/di";
import {
	SiFirebase,
	SiTypescript,
	SiVercel,
	SiTailwindcss,
  SiStyledcomponents,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<DiHtml5 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiCss3 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiTypescript />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiSass />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGithubBadge />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejsSmall />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiVercel />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiTailwindcss />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiStyledcomponents/>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiFirebase />
			</Col>
		</Row>
	);
}

export default Techstack;
