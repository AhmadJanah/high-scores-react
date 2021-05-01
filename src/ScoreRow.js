import React from "react";
function ScoreRow(props){
    const highScore = props.score;
    return (<tr key={highScore.n}>
                <td>{highScore.n}</td>
                <td>{highScore.s}</td>
            </tr>);
}

export default ScoreRow;