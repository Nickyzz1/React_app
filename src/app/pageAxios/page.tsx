"use client"
import {useState, useEffect, Suspense} from "react"
import Image from "next/image"
import {api} from "@/constants/api"
import { truncateSync } from "fs";

interface IData 
{
    name: string;
    image: string;

    //td string para minimizar os bugs
}

const pageAxios = () =>
{
    const [data, setData] = useState<IData[]>([])
    const [erro, setErro] = useState<boolean>(false)
    const [msg, setMsg] = useState<string>("Não foi possível buscar dados")
    const [page, setPage] = useState<string>("6")


    useEffect(() => {

    return () => {
        api.get(`/characters?page=${page}&limit=10`).then((res)=>{
            setErro(false)
            console.log(res.data.items)
            setData(res.data.items)
        }).catch((error)=> 
        {
            console.log(error);
            if(error.response.status === 404)
            {
                setMsg("Página não encontrada");
            }
         
            setErro(true)
        })
    }
    }, [page])

    // dxcytsdvfuye4rfirbe uhgnthot6hg8u4oimjtgpi


    return(
        <>
        <div className="h-screen overflow-y-auto object-cover overflow-hidden ">
        <h1>Pagina com use effect e axios</h1>

        {erro && <h5>{msg}</h5> }
        <input type="text" value={page} onChange={(e)=> setPage(e.target.value)} placeholder="1/6"/>

        <div className="flex flex-wrap gap-3 justify-center items-center">
            {data.map((item, index) => {
                return(
                <div className="rounded-lg hover:" key={index}>
                    <h2>{item.name}</h2>
                    <img className="h-60 w-auto object-cover rounded-lg" src={item.image} alt="" width={300} height={300}></img>
                </div>
                )
            })}
        </div>

        </div>
        </>
    )
}

export default pageAxios;