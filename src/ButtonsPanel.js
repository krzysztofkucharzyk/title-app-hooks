import React from "react";
import './ButtonsPanel.css';

function ButtonsPanel(props) {
    return (
        <div className="buttons-panel">
            <button className="btn r" onClick={() => {
                props.changeColor("red");
            }}>Red</button>
            <button className="btn b" onClick={() => {
                props.changeColor("blue");
            }}>Blue</button>
            <button className="btn g" onClick={() => {
                props.changeColor("green");
            }}>Green</button>
        </div>
    )
}

export default ButtonsPanel;