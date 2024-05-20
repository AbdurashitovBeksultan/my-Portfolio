import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import foto from "./../../Assets"

function Home() {
	return (
		<section>
			<Container fluid className="home-section" id="home">
				<Particle />
				<Container className="home-content">
					<Row>
						<Col md={7} className="home-header">
							<h1 style={{ paddingBottom: 15 }} className="heading">
								{" "}
								helllo
							</h1>

							<h1 className="heading-name">
								Абдурашитов
								<strong className="main-name">
									{" "}
									Бексултан Frontend Разработчик
								</strong>
							</h1>
							<h1 className="heading-name">
								I'M
								<strong className="main-name"> Abdurashitov Beksultan</strong>
							</h1>

							<div style={{ padding: 50, textAlign: "left" }}>
								<Type />
							</div>
						</Col>

						<Col md={5} style={{ paddingBottom: 20 }}>
							  <img
								src={<foto/>}
								alt="mefoto"
								className="img-fluid"
								style={{ maxHeight: "450px" ,maxWidth:"500px"}}
							/>    
              {/* <foto/> */}
						</Col>
					</Row>
				</Container>
			</Container>
			<Home2 />
		</section>
	);
}

export default Home;
