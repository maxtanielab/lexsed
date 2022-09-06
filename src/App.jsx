import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Particuliers from "./Particuliers";
import Professionnels from "./Professionnels";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/particuliers" element={<Particuliers />} />
					<Route exact path="/professionnels" element={<Professionnels />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
