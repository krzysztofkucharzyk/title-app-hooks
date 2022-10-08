import React from "react";
import './Title.css';

function Title(props) {
    return (
        <div>
            <h1 className={`title ${props.color}`}>React Color Text</h1>
        </div>
    )
}


export default Title;