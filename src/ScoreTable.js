import React, { useState } from "react";
import ScoreRow from "./ScoreRow";
function ScoreTable(props) {
    const [sorted, setSorted] = useState(0);
    function sortScores() {
        if (sorted % 2 == 0) {
            props.tableScores.map(coun => coun.scores.sort(compareNum).reverse());
        }
        else {
            props.tableScores.map(coun => coun.scores.sort(compareNum));
        }
        setSorted(sorted + 1);
    }
    return (
        <div className="comp-div">
            <h1>High Scores Per Country</h1>
            <button className="sort-button" onClick={sortScores}>Sort Scores: {sorted}</button>
            {props.tableScores.map(score => (
                <div key={score.name} className="score-div">
                    <h2>HIGH SCORES: {score.name}</h2>
                    <table className="APP score-table">
                        <thead>
                            {score.scores.sort(compareNum).map(high => (
                                <ScoreRow score={high} />
                            ))}
                        </thead>
                    </table>
                </div>
            ))}
        </div>
    );
}

function compareNum(a, b) {
    // Use toUpperCase() to ignore character casing
    const numA = a.s;
    const numB = b.s;

    let comparison = 0;
    if (numA < numB) {
        comparison = 1;
    } else if (numA > numB) {
        comparison = -1;
    }
    return comparison;
}
export default ScoreTable;