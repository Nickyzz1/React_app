import axios from "axios"

export const api = axios.create({
    baseURL: "https://dragonball-api.com/api"
}) 

// export const apiViaCEep = axios.create({
//     baseURL: "https://viacep.com.br"
// }) 
// swagger serviço de beck end 