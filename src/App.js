import Header from './components/Header'
import ScoresContainer from './components/scores/ScoresContainer';
import Stats from './components/stats/Stats';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ScoresContainer />} />
          <Route path='/stats' element={<Stats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
