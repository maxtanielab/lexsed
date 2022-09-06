import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Particuliers from "./Particuliers";
import Professionnels from "./Professionnels";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/particuliers" element={<Particuliers />} />
					<Route path="/professionnels" element={<Professionnels />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
