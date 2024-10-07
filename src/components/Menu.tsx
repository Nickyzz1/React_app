import {ROUTES} from "@/constants/routes"
import Link from "next/link";


export const Menu = ({op1, op2, op3} : 
{
    op1: string;
    op2: string;
    op3: string;
}

// a ? quer dizer argumento opcoional, pessimo para performance

) =>{
    const style = 
    {
    p:"text-white bg-cyan-700 p-2 rounded hover:bg-cyan-600",
    nav:"flex flex-wrap text-white bg-cyan-800 gap-3 p-3 text-large flex-row justify-center align-center font-comic"
    }

    return(
        <>
         <nav className={style.nav}>
          <Link href={ROUTES.fetchPage} className={style.p} >{op1}</Link>
          <Link href={ROUTES.axiosPage} className={style.p} >{op2}</Link>
          <Link href={ROUTES.serverSide} className={style.p} >{op3}</Link>
        </nav>
        </>
    );
}