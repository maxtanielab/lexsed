import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Particuliers from "./Particuliers";
import Professionnels from "./Professionnels";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/particuliers" element={<Particuliers />} />
					<Route path="/professionnels" element={<Professionnels />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
