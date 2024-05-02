import React,{useState,useEffect} from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer";
import CustomNavbar from "./components/Navbar/CustomNavbar";

function App() {
	const [load, upadateLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			upadateLoad(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Router>
			<div className="App" id={load ? "no-scroll" : "scroll"}>
				<CustomNavbar />
				<Routes>
					<Route path="*" element={<Home />} />
					<Route path="/project" element={<Projects />} />
					<Route path="/about" element={<About />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
