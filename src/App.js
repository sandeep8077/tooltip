
import React from 'react';
import { useState } from 'react';
import './App.css';
import Tooltip from './Tooltip';
const App = ()=>{
const [position,setPosition] = useState('top');
const [hovering,setHovering]= useState(false);
  
  //handleClick function which handle the position
 const handleClick=(pos)=>{
 setPosition(pos);
  };


  //handleMouseEnter function which handle the hovering condintion


 const handleMouseEnter=()=>{
    setHovering(true);
  };



    //handleMouseLeave function which handle the hovering condintion


 const handleMouseLeave=()=>{
   setHovering(false);
  }


  


    return (
  

      <div className="App">
  {/* //position of the all button */}

        <div className='btn-position'>
          <div className='grp-name'>
            select hovering  position -- 
          </div>
          <button
          className= {position=== 'top' ? "btn active" :"btn" }
          onClick={(e)=>{
            handleClick('top');
          }}>
            top
          </button>
         
          <button
          className={position=== 'right' ? "btn active" :"btn"}
          onClick={(e)=>{
            handleClick('right');
          }}>
            right
          </button>


          <button
          className={position=== 'left' ? "btn active" :"btn"}
          onClick={(e)=>{
            handleClick('left');
          }}>
            left
          </button>
         
          <button
          className={position=== 'down' ? "btn active" :"btn"}
          onClick={(e)=>{
            handleClick('down');
          }}>
            down
          </button>
        </div>
{        //buttons

}        <div id="button-container">
          <button
          className='btn hover-btn'
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
          >

            Hover Over Me!!
          </button>
          {hovering && <Tooltip position={position}/>}
        </div>
        

      </div>
    );
  }


export default App;
