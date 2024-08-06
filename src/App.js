import './App.css';
import TVSEurogrip from './images/TVSEurogrip.jpg';
import tvsMobility from './images/tvsMobility.png';
import ShiftDetails from './components/ShiftDetails';
import RecipeDetails from './components/RecipeDetails';
import Visualization from './components/Visualization';
import TimeMinutesSeconds from './components/TimeMinutesSeconds';

function App() {
  return (
    <div className="App">

      <nav className="navbar bg-body-tertiary biasnavbar">
        <div className="container-fluid">
          <img src={TVSEurogrip} alt='company logo' />
          <span className="navbar-brand mb-0 h1">BIAS CUTTER</span>
          <img src={tvsMobility} alt='company logo' />
        </div>
      </nav>

      <div className='whole-content' >
        <TimeMinutesSeconds/>
        <ShiftDetails />
        <RecipeDetails />
        <Visualization />
      </div>

    </div>
  );
}

export default App;
