import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomePage from "./HomePage";
import './Home.css'

function Home() {
	return (
		<section className="section_Contain">
			<Container fluid id="home" >
				<Container className="home_content">
					<Row>
						<Col md={7} className="home_header">
							<h1 className="heading">
								Абдурашитов Бексултан Frontend разработчик
								<span className="wave" role="img" aria-labelledby="wave"></span>
							</h1>
							<h1 className="heading_name">
								<strong className="main_name">
									I'm Abdurashitov Beksultan Frontend developer
								</strong>
							</h1>
						</Col>
						{/* <Col
							md={5}
							></Col> */}
					</Row>
				</Container>
			</Container>
			<HomePage />
		</section>
	);
}

export default Home;
