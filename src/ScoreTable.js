import React from "react";
function ScoreTable(props) {
    return (
        <div className="comp-div">
            <h1>High Scores Per Country</h1>
            {props.tableScores.map(score => (
                <div key={score.name} className="score-div">
                    <h2>HIGH SCORES: {score.name}</h2>
                    <table className="APP score-table">
                        <thead>
                            {score.scores.map(high => (
                                <tr key={high.n}>
                                    <td>{high.n}</td>
                                    <td>{high.s}</td>
                                </tr>
                            ))}
                        </thead>
                    </table>
                </div>
            ))}
        </div>
    );
}
export default ScoreTable;