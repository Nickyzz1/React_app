"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface IData {
    name: string;
    ki: string;
    image: string;
}

const FetchPage = () => {
    const [character, setcharacter] = useState<IData[]>([]);

    const style =
    {
        container: "flex flex-row flex-wrap gap-6 m-4 justify-center",
        box: "flex flex-col items-center justify-center w-80 p-6 bg-cyan-700 rounded-xl text-white"
    }

    useEffect(() => {
        const load = async () => {
            try {
                const res = await fetch("https://dragonball-api.com/api/characters/");
                
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                
                const data = await res.json();
                console.log(data); // Veja a estrutura do retorno
                setcharacter(data.items || []);
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
            }
        };
        
        load();
    }, []);

    return (
        <div className="min-h-screen overflow y-auto">
            <h1>Fetch nativo para requisições get</h1>
        <div className={style.container}>
     
            {character.map((item: IData, index) => (
                <div className={style.box} key={index}>
                    <h2>{item.name}</h2>
                    <p>{item.ki}</p>
                    <img
                        className="h-60 w-auto object-cover rounded-lg"
                        src={item.image}
                        alt={item.name} // Usar um alt apropriado
                        width={200}
                        height={400}
                        //priority
                    />
                </div>
            ))}
        </div>
        </div>
    );
};

export default FetchPage;
