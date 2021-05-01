import React, { useState } from "react";
function AllScoresTable(props) {
    const [sorted, setSorted] = useState(0);
    function sortScores() {
        if (sorted % 2 == 0) {
            props.tableScores.sort(compareNum).reverse();
        }
        else {
            props.tableScores.sort(compareNum);
        }
        setSorted(sorted + 1);
    }
    return (
        <div className="comp-div">
            <h1>All Players Scores</h1>
            <button className="sort-button" onClick={sortScores}>Sort Scores: {sorted}</button>
            {props.tableScores.map(score => (
                <div key={score.Player} >
                   <table className="APP score-table">
                        <thead>
                            <tr>
                                <td>{score.Player}</td>
                                <td>{score.country}</td>
                                <td>{score.score}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            ))}
        </div>
    );
}

function compareNum(a, b) {
    const numA = a.score;
    const numB = b.score;

    let comparison = 0;
    if (numA < numB) {
        comparison = 1;
    } else if (numA > numB) {
        comparison = -1;
    }
    return comparison;
}
    export default AllScoresTable;