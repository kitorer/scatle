import React from "react";

import "./components.css";
import { Component } from "react";
import { useState } from "react";
import  {InfoModal, HelpModal, StatsModal, SettingsModal,}  from './Modals.js';

class TitleContainer extends Component {
    render() {
      return (
        <div className="inline-flex w-full font-normal justify-between">
          <div className = "flex text-custom-fgcolor px-1 py-2 ">
            < IconContainer/>
          </div>
          <div className = "flex-row grow items-center">
            <h1 className="">💩Turdle💩</h1>
          </div>
          <div className="flex">
          <Stats />

          < Info/>
          </div>
        </div>
      );
    }
  }

class IconContainer extends Component{
  render() {
    return(
      <div className="flex">
        < Help/>
        <Settings />
    </div>
    )
  }
}

function Help() {
  // when clicking on the X or the clicking outside of the box
  const [HelpOn, setHelpOn] = useState(true);

  return (
    <div className="justify-items-start bg-defaultTheme">

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
function Settings() {
  const [SettingsOn, setSettingsOn] = useState(false);

  return(
    <div>
      <div>
        <button className=" to-white" onClick={ ()=> {setSettingsOn(true)}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </button>
        {SettingsOn && <SettingsModal setSettingsOff= {setSettingsOn} />}

      </div>      
    </div>
  )
}

function Stats() {
  const [StatsOn, setStatsOn] = useState(false);

  return(
    <div>
      <div>
        <button className=" to-white" onClick={ ()=> {setStatsOn(true)}}>
      
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="20" x2="12" y2="10"></line>
          <line x1="18" y1="20" x2="18" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="16"></line>
        </svg>
        </button>
        {StatsOn && <StatsModal setStatsOff= {setStatsOn} />}

      </div>      
    </div>
  )
}

function ToggleMode(){
  const [toggle, setToggle] = useState(true);

  const toggleClass = ' transform translate-x-5';
  return(
    <div className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer" onClick={() => {setToggle(!toggle);}}>
      <div className =  {"bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform" +  (toggle ? null : toggleClass)}>
      </div>
    </div>
  )
}

function ToggleDark() {
  const [toggle, setToggle] = useState(true);

  const toggleClass = ' transform translate-x-5';
  return(
    <div className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer" onClick={() => {setToggle(!toggle);}}>
      <div className =  {"bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform" +  (toggle ? null : toggleClass)}>
      </div>
    </div>
  )
}

export {
  TitleContainer,
  Help,
}

