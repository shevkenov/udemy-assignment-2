import React from 'react'

import classes from './CharComponent.module.css'

export default function CharComponent(props) {
    
    return (
      <div className={classes.char} onClick={props.onclick}>
        {props.char}
      </div>
    );
}
