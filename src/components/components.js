import "./components.css";
import { Component } from "react";
import { useState } from "react";

import  InfoModal  from './infoModal.js';
import  HelpModal  from './helpModal.js';

class Input extends Component {
    render() {
    return( 
    <label className="relative block">
      <p>which animal did this?</p>
      <input className="placeholder:italic	text-black placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500" 
      placeholder="Type your guess" type="text" name="guess"/>
      <button class="rounded-full bg-white hover:bg-gray-400 w-1/3 border text-black mt-6">Hint</button>
    </label>
    );
    }
}

class TitleContainer extends Component {
    render() {
      return (
          <div className="inline-flex font-normal max-w-screen-md mx-auto ">
            <div className = "flex justify-evenly text-custom-fgcolor px-1 py-2 ">
              < IconContainer/>
            </div>
            <div className = "flex flex-row grow text-left items-center">
              <h1 className="">Turdle</h1>
            </div>
          </div>
      );
    }
  }

class IconContainer extends Component{
  render() {
    return(
      <div className="flex flex-1">

        < Help/>

        < Info/>

    </div>
    )
  }
}

function Help() {
  // when clicking on the X or the clicking outside of the box
  const [HelpOn, setHelpOn] = useState(false);

  return (
    <div>

      <button className=" to-white" onClick={ ()=> { setHelpOn(true)}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      </button>
      {HelpOn && <HelpModal setHelpOff = {setHelpOn}/>}

    </div>
  )
}

function Info() {
  const [InfoOn, setInfoOn] = useState(false);

    return(
      <div>
        <button className=" to-white" onClick={ ()=> {setInfoOn(true)}}>
      
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </button>
        {InfoOn && <InfoModal setInfoOff= {setInfoOn} />}

      </div>
    );
  
}

export {
  Input,
  TitleContainer,
  Info,
}

