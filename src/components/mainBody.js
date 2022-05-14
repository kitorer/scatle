import React from "react";
import { Component, useState } from "react";

// These are arrays bc 0 = ez & 1 = hard
let hint = [], answer = [], todaysPoop;

var tries = [] , recentTry;

    hint = "poop";
    answer = "poop";

    todaysPoop = "http://dept.harpercollege.edu/biology/guide/gallery/evidence/scat/original/Bird_Berry_Scat.jpg";

function Input (props) {
    const [submission, setSub] = useState('');
    const [chances, setChances] = useState(2);
    
    
    const handleSubmit = (e) => {

        setChances(chances => chances - 1);
        //guards
        console.log(submission);
        if(tries.length === 2) {
            alert("Run out of tries");
        }
        if(submission != answer) {
            tries.push(submission);
            alert("Wrong! Try again");
        }

        else if(submission === answer) {
            alert("Right answer");
        }
        e.preventDefault();
    }

    return( 
    <label className="relative block">
        
        <img src= {todaysPoop} className ='flex rounded-lg mb-10'alt="poop" ></img> {/* replace this with a something that changes the picture everyday*/}
        <form onSubmit={handleSubmit}>
        <p>Which animal did this?</p>
            <input 
                className="placeholder:italic	text-black placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500" 
                placeholder="Type your guess" type="text" name="guess"
                value={submission}
                onChange={(e) => setSub(e.target.value)}
            />
        </form>

        {/*hint will show up when hardmode is on*/}
        <p>{chances + 1} tries left</p>

    </label>
    );
}

function Hint (props) {

    return(

        <button 
        class="rounded-full bg-white hover:bg-gray-400 w-1/3 border text-black mt-6"
        onClick={alert()}
        >
            Hint
        </button>

    );
}

export{
    Input
} 

/*
export {
    Input,
    TitleContainer,
    Info,
  }
  
*/