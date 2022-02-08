import Header from './components/Header';
import GameScores from './components/scores/GameScores';
import Stats from './components/stats/Stats';
import Standings from './components/standings/Standings';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
    		<Router>
        		<Header />
        		<Routes>
					<Route path='/' element={<GameScores />} />
					<Route path='/stats' element={<Stats />} />
					<Route path='/standings' element={<Standings />} />
        		</Routes>
      		</Router>
      		<Footer />
    	</div>
	);
};

export default App;
