import React, { useState } from "react";
import scores from "./scores";

function SortButton(){
    const [sort, setSort] = useState(true);
    
    function sortScores() {
        sort ? scores.map(country => country.scores.sort((a, b) => a.s - b.s).reverse())
            : scores.map(country => country.scores.sort((a, b) => a.s - b.s))
        setSort(!sort)
        console.log(sort);
    }
    return <button onClick={sortScores} className="sort-button">Sort Scores</button>;
}
export default SortButton;