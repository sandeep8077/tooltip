import React from 'react';
import './App.css'



const Tooltip = (props)=>{
    console.log(props)
  

    
        return (
            <div className={props.position}>
                Thanks for hovering !! i am a tooltip !
            </div>
        )
    
}


export default Tooltip;