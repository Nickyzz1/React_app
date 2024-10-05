import {ROUTES} from "@/constants/routes"
import Link from "next/link";
import React from "react";

export const Menu = ({op1, op2, op3, op4, op5} : 
{
    op1: string;
    op2: string;
    op3: string;
    op4: string;
    op5: string;

}) =>{
    const style = 
    {
    p:"text-white bg-cyan-700 p-2 rounded hover:bg-cyan-600",
    nav:"flex flex-wrap text-white bg-cyan-800 gap-3 p-3 text-large flex-row justify-center align-center font-comic sticky top-0 w-full h-auto"
    }

    return(
        <>
         <nav className={style.nav}>
          <Link href={ROUTES.home} className={style.p} >{op1}</Link>
          <Link href={ROUTES.caluladora}  className={style.p}>{op2}</Link>
          <Link href={ROUTES.fechPage}  className={style.p}>{op3}</Link>
          <Link href={ROUTES.axiosPage}  className={style.p}>{op4}</Link>
          <Link href={ROUTES.tailwindPage}  className={style.p}>{op5}</Link>
        </nav>
        </>
    );
}