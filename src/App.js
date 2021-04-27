import logo from './logo.svg';
import './App.css';
import ScoreTable from "./ScoreTable";
import scores from "./scores";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload My High score.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <main className="App-body">
        <ScoreTable tableScores={scores} />
      </main>
    </div>
  );
}

export default App;
