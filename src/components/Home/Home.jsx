import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomePage from "./HomePage";


function Home() {
	return (
		<section>
			<Container fluid className="home-section" id="home">
				{/* <Particle /> */}
				<Container className="home-content">
					<Row>
						<Col md={7} className="home-header">
							<h1 style={{ paddingBottom: 15 }} className="heading">
              Абдурашитов  Бексултан  Frontend разработчик
								<span className="wave" role="img" aria-labelledby="wave"></span>
							</h1>
							<h1 className="heading-name">
								<strong className="main-name">
									I'm  Abdurashitov Beksultan Frontend developer
								</strong>
							</h1>
						</Col>
						<Col md={5} style={{ paddingBottom: 15, textAlign: "center" }}>
							
						</Col>
					</Row>
				</Container>
			</Container>
      <HomePage/>
		</section>
	);
}

export default Home;


