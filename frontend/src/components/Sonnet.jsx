import React from "react";
import "../App.css"

const Sonnet = ({sonnet}) => {
    return (
        <div className="Sonnet">
            {
                sonnet.split('\n')
                .map(e => <p>{e}</p>)
            }
        </div>
    )
}

export default Sonnet;