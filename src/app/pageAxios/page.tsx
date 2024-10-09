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
    const [page, setPage] = useState<string>("1")
    const [personName, setName] = useState<string>("")

    useEffect(() => {
        // Verifica se pelo menos um dos parâmetros é fornecido
        if ((parseInt(page) < 7 && page != "" )|| personName) {
            console.log("Buscando dados..."); // Para depuração
            const url = `/characters?${personName ? `&name=${encodeURIComponent(personName)}` : ''}${page ? `&page=${encodeURIComponent(page)}` : ''}`;
            console.log("URL da requisição:", url); // Para depuração

            api.get(url)
                .then((res) => {
                    setErro(false);
                    console.log(res.data); // Inspecione a resposta da API
                    const items = res.data.items || [];
                    setData(items)
                    if (items.length === 0) {
                        setMsg("Nenhum personagem encontrado.");
                    } else {
                        setMsg(""); // Limpa a mensagem se houver resultados
                    }
                })
                .catch((error) => {
                    console.log("Erro:", error); // Para depuração
                    if (error.response) {
                        console.log("Resposta do servidor:", error.response);
                        setMsg(error.response.status === 404 ? "Página não encontrada" : "Erro ao buscar dados");
                    } else {
                        setMsg("Erro na requisição");
                    }
                    setErro(true);
                });
        } else {
            setMsg("Digite um numero ou uma página válida.");
            setErro(true);
        }
    }, [page, personName]);

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
                <input 
                    type="text" 
                    value={personName} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Pesquise por nome" 
                />

                <div className="flex flex-wrap gap-3 justify-center items-center">
                    
                    { 
                    data.map((item, index) => (
                        <div className="rounded-lg hover:" key={index}>
                            <h2>{item.name}</h2>
                            <img 
                                className="h-60 w-auto object-cover rounded-lg" 
                                src={item.image} 
                                alt={item.name} 
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
