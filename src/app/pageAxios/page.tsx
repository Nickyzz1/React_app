"use client"
import { useState, useEffect } from "react"
import { api } from "@/constants/api"

interface IData {
    name: string;
    image: string;
}

const PageAxios = () => {
    const [data, setData] = useState<IData[]>([])
    const [erro, setErro] = useState<boolean>(false)
    const [msg, setMsg] = useState<string>("Não foi possível buscar dados")
    const [page, setPage] = useState<string>("")

    useEffect(() => {
        if (page) { // Verifica se o valor de page não está vazio
            api.get(`/characters?page=${page}&limit=10`)
                .then((res) => {
                    setErro(false)
                    setData(res.data.items)
                })
                .catch((error) => {
                    console.log(error);
                    if (error.response && error.response.status === 404) {
                        setMsg("Página não encontrada");
                    }
                    setErro(true)
                });
        }
    }, [page]) // A requisição é feita sempre que o valor de page mudar

    return (
        <>
            <div className="h-screen overflow-y-auto object-cover overflow-hidden">
                <h1>Página com useEffect e Axios</h1>
                {erro && <h5>{msg}</h5>}
                <input 
                    type="text" 
                    value={page} 
                    onChange={(e) => setPage(e.target.value)} 
                    placeholder="1/6" 
                />
                <div className="flex flex-wrap gap-3 justify-center items-center">
                    {data.map((item, index) => (
                        <div className="rounded-lg hover:" key={index}>
                            <h2>{item.name}</h2>
                            <img 
                                className="h-60 w-auto object-cover rounded-lg" 
                                src={item.image} 
                                alt="" 
                                width={300} 
                                height={300} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PageAxios;
