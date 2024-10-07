import Link from "next/link";
import React, { Suspense } from "react"

type IData =
{
    items:
    {
        name: string;
        // status: string;
        id: string;
    }[]
}
//usar type ou interface
const ServerSide = async () =>{

    const res = await fetch("https://dragonball-api.com/api/characters/")
    const data: IData = await res.json()
    console.log(data)

    const style = {
        container:"flex flex-wrap justify-center items-center gap-3",
        box: "flex flex-wrap flex-col bg-cyan-700 text-white h-auto w-60 p-4 rounded-lg text-center",
        btn: "bg-cyan-900 p-2 rounded hover:bg-cyan-600"
    }

    return(
        <>
        <div className="h-screen text-center">
            <h1 className="m-4">Server Side Redering</h1>
            <Suspense fallback = { <div> Loading..</div>}>
            <div className={style.container}>
                {data.items.map((item, index) => {
                    return(
                        <div key={item.id} className={style.box}>
                            <h2 className="m-2">{item.name}</h2>
                            <Link href={`/perso/${item.id}`} className={style.btn}>ABRIR</Link>
                        </div>
                    )
                })}
            </div>
            </Suspense>
        </div>
        </>
    )
}

export default ServerSide;