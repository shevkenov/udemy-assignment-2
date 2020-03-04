import React from 'react'

export default function Validation(props) {
    
    const message = props.lenght >= 6 ? 'Text long enough' : 'Text too short'
    const style = {
        color: 'red',
        fontWeight: 'bold'
    }

    if (props.lenght >= 6){
        style.color = "black";
        style.fontWeight = 'normal'
    }
    
    return <div style={style}>{message}</div>;
}
