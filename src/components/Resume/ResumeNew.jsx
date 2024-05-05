import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	return (
		<div>
			<Container fluid className="resume-section">
				<Particle />
				<h1>beks Abdurashitov</h1>
				<h1>beks Abdurashitov</h1>
				<h1>beks Abdurashitov</h1>
			</Container>
		</div>
	);
}

export default ResumeNew;
