import React from "react";

const InfoModal = ({ setInfoOff }) => {
  
    return (
    <div className="fixed z-10 inset-0 overflow-y-auto" onClick={ ()=> { setInfoOff(false)}} >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen " >
            <div className=" inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 h-fit" >

                <div className="flex items-end justify-center h-min pt-4 px-4 pb-4 text-center sm:block sm:p-0" >

                    <div className=" transition-opacity" >
                        <div className=" ">
                            <div className="absolute right-4 top-4 dark:text-[#D7DADC]">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="#000000" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                    onClick={ ()=> { setInfoOff(false)}}
                                    ><path d="M3 3h18v18H3zM15 9l-6 6m0-6l6 6"/></svg>
                            </div>

                            <div className="mt-3 text-center sm:mt-5">

                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co
                                    </p>

                            </div>
                            </div>
                            <div className="flex">

                            </div>
                    </div>
                </div>
            </div>
        </span>
        </div>
    </div>
  
    );
  }

const HelpModal = ({ setHelpOff }) => {
  
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" onClick={ ()=> { setHelpOff(false)}} >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen " >
                <div className=" inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 h-fit" >
    
                    <div className="flex items-end justify-center h-min pt-4 px-4 pb-4 text-center sm:block sm:p-0" >
    
                        <div className=" transition-opacity" >
                            <div className=" ">
                                <div className="absolute right-4 top-4 dark:text-[#D7DADC]">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="24" height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="#000000" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                        onClick={ ()=> { setHelpOff(false)}}
                                        ><path d="M3 3h18v18H3zM15 9l-6 6m0-6l6 6"/></svg>
                                </div>
    
                                <div className="mt-3 text-center sm:mt-5">
    
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co
                                        </p>
    
                                </div>
                                </div>
                                <div className="flex">
    
                                </div>
                        </div>
                    </div>
                </div>
            </span>
            </div>
        </div>
      
        );
  }
  
  export {
      InfoModal,
      HelpModal,
  }