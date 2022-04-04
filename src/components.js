import "./components.css";
import { Component } from "react";

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
        <div >
          <div className="inline-flex font-normal mb-6 text-4xl py-10 top-full">

            <button className=" to-white">
              < Info/>
            </button>

            <h1>Turdle</h1>
          </div>
        </div>
      );
    }
  }

class Info extends Component {
  render() {
    return(
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      </div>
    );
  }
}
export {
  Input,
  TitleContainer,
  Info,
}
