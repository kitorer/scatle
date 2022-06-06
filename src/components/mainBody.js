import React from "react";
import { Component, useState } from "react";

// These are arrays bc 0 = ez & 1 = hard
let hint, answer, todaysPoop, winIndex = -1;
var tries = [];
let sharCopy = ['💩'];

const endMessage = new Map();
endMessage.set(0, "Booo! come back tomorrow");
endMessage.set(1, "Winner winner poop dinner!")

    hint = "poop";
    answer = "poop";
    todaysPoop = "http://dept.harpercollege.edu/biology/guide/gallery/evidence/scat/original/Bird_Berry_Scat.jpg";

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
console.log(today.getDay())

// going to need an actual way to tell if its been the next day
if ((today.getHours() === 0 || localStorage.getItem('scatle_win') == null) && (localStorage.getItem('scatle_dayUsed') == null || localStorage.setItem('scatle_dayUsed') != today.getDay()))
{
    localStorage.setItem('scatle_win', '-1');
    localStorage.setItem('scatle_winIndex', '-1');
    localStorage.setItem('scatle_tries', '0');
}
    
function Input (props) {
    const [submission, setSub] = useState('');
    const [chancesLeft, setChances] = useState(3);
    const [win, setWin] = useState(-1);
    
    const handleSubmit = (e) => {

        const sub = submission.toLowerCase();
        console.log(sub + " = submission")
        //guards
        if(chancesLeft === 0 && sub !== answer) {
            //alert("Run out of tries");
            setWin(0);
            setChances(chancesLeft => chancesLeft - 1);
            localStorage.setItem('scatle_win', '0');
            localStorage.setItem('scatle_tries', tries.length.toString());
        }
        else if(sub !== answer) {
            tries.push(submission);
            //alert("Wrong! Try again");
            setChances(chancesLeft => chancesLeft - 1);
        }
        else if(sub === answer) {
            //alert("Right answer");
            setWin(1);
            localStorage.setItem('scatle_win', '1');
            winIndex = tries.length;
            localStorage.setItem('scatle_winIndex', winIndex.toString());
            localStorage.setItem('scatle_tries', winIndex.toString());
            console.log(tries.length + "winner winner chicken dinner")
        }
        
        console.log(parseInt(localStorage.getItem('scatle_win')))
        e.preventDefault();
    }

    if(chancesLeft >= 0 && win === -1 && parseInt(localStorage.getItem('scatle_win')) === -1)
    {
        return( 
    
            <label className="relative block">
                
                <img src= {todaysPoop} className ='flex rounded-lg mb-10'alt="poop" ></img> {/* replace this with a something that changes the picture everyday*/}
                <form onSubmit={handleSubmit}>
        
                <p>Which animal did this?</p>
                    <input 
                        className="placeholder:italic	text-black placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500" 
                        placeholder="Type your guess" type="text" name="guess"
                        value = {submission}
                        
                        onChange={(e) =>{
                            setSub(e.target.value)
                            
                            } 
                        }
                    />
                </form>
        
                {/*hint will show up when hardmode is on*/}
                <p>{chancesLeft + 1} tries left</p>
        
            </label>
            );
    }
    else {
        return <End />
    }
}

// this should be in a different page but im too lazy
function End (props) {
    const [isCopy, setCopy] = useState (false)

    localStorage.setItem('scatle_dayUsed' , today.getDay().toString);
    return(
        <div className="flex flex-col items-center gap-4 mt-2">
            <img src= {todaysPoop} className ='flex rounded-lg mb-10'alt="poop" ></img> {/* replace this with a something that changes the picture everyday*/}
            {endMessage.get(parseInt(localStorage.getItem('scatle_win')))}
            <div className="flex gap-2">
                <ShowResult />
            </div>
            <div className="">
                <button onClick = {() => { setCopy(true); {/* was something here*/}}} className= "px-3 py-1 text-xl rounded-sm cursor-pointer bg-orange-900"> share </button>
                <Copy isCopyState = {isCopy} set = { setCopy }/>
                
            </div>
        </div>
    );
}

function Copy (prop) {
    // day counter need to be implemented
    const shareText = "Scattle #1" + "\n\n" + sharCopy + "\n" + "scatle.com";
    if(prop.isCopyState) {
        
        navigator.clipboard.writeText(shareText)
        .catch( 

        );
            return (
                <div className="">
                    Copied to clipboard!
                </div>
            );
        
    }
}

// how to store: save tries.length and winIndex, reset to 0 if its a new day
function ShowResult () {
    
    winIndex = parseInt(localStorage.getItem('scatle_winIndex'));
    let tryes = parseInt(localStorage.getItem('scatle_tries'));
    
    let redLength = tryes;
    const fields = [];

    if (winIndex >= 0) {
        redLength--;
    }

    // 4 is the total number of chances, but you wont always use them
    for(let i = 0; i < 4; i++) {
        
        if (i <= redLength)
        {
            fields.push(<div className="w-4 h-4 bg-red-700 rounded-sm inline-block"></div>);
            sharCopy.length < 5 ? sharCopy.push('🟥') : console.log("tried to push too many emojis");
        }
        else if (winIndex === i)
        {
            fields.push(<div className="w-4 h-4 rounded-sm bg-emerald-600 inline-block"></div>);
            sharCopy.length < 5 ? sharCopy.push('🟩') : console.log("tried to push too many emojis");

        }
        else {
            fields.push(<div className="w-4 h-4 rounded-sm bg-slate-500 inline-block"></div>);
            sharCopy.length < 5 ? sharCopy.push('⬛️') : console.log("tried to push too many emojis");

        }
    }
    return(
        <div className="inline-block float : left flex space-x-1">
            {fields}
        </div>
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

