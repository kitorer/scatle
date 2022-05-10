import React from "react";

const HelpModal = ({ setHelpOff }) => {
  
    return (
  
        <div className="   bg-gray-500 opacity-75 fixed inset-0 z-50 transition-opacity  ">
  
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-4 text-center sm:block sm:p-0" onClick={ ()=> { setHelpOff(false)}}>

                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" >
                    <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 ">
                        <div className="absolute right-4 top-4 dark:text-[#D7DADC]">
                        <button onClick={ ()=> { setHelpOff(false)}} className=" rounded px-2 py-1 text-white  bg-red-400 ">X</button>
                        </div>

                        <div className="text-center">
                            <div className="mt-2">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co
                                </p>
                            </div>
                        </div>
                        </div>
                        <div className="flex">
                        </div>
  
                </div>
            </div>
        </div>
  
    );
  }
  
  export default HelpModal