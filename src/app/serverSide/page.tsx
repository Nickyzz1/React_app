import Link from "next/link";
import React from "react";
// é como se fosse uma struct ou uma classe
type IData = {
    items: {
        name: string;
        id: string;
    }[];
};

const FetchServerSide = async () => {
    let data: IData = { items: [] }; // Inicializa como vazio

    try {
        const res = await fetch("https://dragonball-api.com/api/characters/");
        
        if (!res.ok) {
            console.error("Erro ao buscar os dados:", res.statusText);
            return data; // Retornar lista vazia em caso de erro
        }

        data = await res.json();
    } catch (error) {
        console.error("Erro ao carregar dados:", error);
    }

    const style = {
        container: "flex flex-wrap justify-center items-center gap-3",
        box: "flex flex-wrap flex-col bg-cyan-700 text-white h-auto w-60 p-4 rounded-lg text-center",
        btn: "bg-cyan-900 p-2 rounded hover:bg-cyan-600"
    };

    return (
        <div className="min-h-screen overflow y-auto text-center">
            <h1 className="m-4">Server Side Rendering</h1>
            <div className={style.container}>
                {data.items.map((item) => (
                    <div key={item.id} className={style.box}>
                        <h2 className="m-2">{item.name}</h2>
                        <Link href={`/person/${item.id}`} className={style.btn}>
                            ABRIR
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FetchServerSide;
