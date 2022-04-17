import React from "react";

function ColorBlock(props) {
    return (
        <div className="colorBlock" style={{ 'backgroundColor': props.color }}>
            {props.color}
        </div>
    );
}

export default ColorBlock;
// Do not forget to export your component once you have built it!

