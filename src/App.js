import React from "react";
import './App.css';
import ScoreTable from "./ScoreTable";
import scores from "./scores";
import AllScoresTable from "./AllScoresTable";
let scoresArr = scores.sort(compare);

const allCountries = [];
scores.map(country => country.scores.map(player => allCountries.push({
  country: country.name,
  Player: player.n,
  score: player.s
})));
console.log(scoresArr);
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="App-body">
        <AllScoresTable tableScores={allCountries} />
        <ScoreTable tableScores={scoresArr} />
      </main>
    </div>
  );
}
function compare(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}
export default App;
