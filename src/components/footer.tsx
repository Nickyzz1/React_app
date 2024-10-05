import React from "react";
export const Footer = ({op1, op2} : { op1: string; op2: string; }

) =>{

    const style = 
    {
    container:"text-white bg-cyan-800 bottom-0 w-screen flex p-2 flex-wrap items-center",
    }

    return(
        <>
         <footer className={style.container}>
          <p>{op1}</p>
          <p className="ml-2">{op2}</p>
        </footer>
        </>
    );
}