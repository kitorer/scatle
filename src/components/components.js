import React from "react";

import "./components.css";
import { Component } from "react";
import { useState } from "react";
import  {InfoModal, HelpModal}  from './Modals.js';

class TitleContainer extends Component {
    render() {
      return (
        <div className="">
          <div className="inline-flex font-normal max-w-screen-md mx-auto ">
            <div className = "flex justify-evenly text-custom-fgcolor px-1 py-2 ">
              < IconContainer/>
            </div>
            <div className = "flex flex-row grow text-left items-center">
              <h1 className="">Turdle</h1>
            </div>
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
function Settings() {
  const [SettingsOn, setSettingsOn] = useState(false);

  return(
    <div>
      <div>
        <button className=" to-white" onClick={ ()=> {setSettingsOn(true)}}>
      
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </button>
        {SettingsOn && <InfoModal setSettingsOff= {setSettingsOn} />}

      </div>      
    </div>
  )
}
function Share() {
  const [ShareOn, setShareOn] = useState(false);

  return(
    <div>
      <div>
        <button className=" to-white" onClick={ ()=> {setShareOn(true)}}>
      
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </button>
        {ShareOn && <InfoModal setShareOff= {setShareOn} />}

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
      
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </button>
        {StatsOn && <InfoModal setStatsOff= {setStatsOn} />}

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

