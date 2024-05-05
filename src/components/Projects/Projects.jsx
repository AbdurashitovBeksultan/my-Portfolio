import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My <strong className="purple"> Projects</strong>
				</h1>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							// imgPath={}
							isBlog={false}
							title="foto"
							description="react"
							ghLink="https://github.com/AbdurashitovBeksultan"
							demoLink=""
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							// imgPath={}
							isBlog={false}
							title="foto"
							description="react"
							ghLink="https://github.com/AbdurashitovBeksultan"
							demoLink=""
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							// imgPath={}
							isBlog={false}
							title="foto "
							description="react"
							ghLink="https://github.com/AbdurashitovBeksultan"
							demoLink=""
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
