import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Particuliers from "./Particuliers";
import Professionnels from "./Professionnels";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						basename={`${process.env.PUBLIC_URL}/particuliers`}
						path="/particuliers"
						element={<Particuliers />}
					/>
					<Route
						basename={`${process.env.PUBLIC_URL}/professionnels`}
						path="/professionnels"
						element={<Professionnels />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
