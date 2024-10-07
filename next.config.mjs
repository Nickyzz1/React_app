/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['https://dragonball-api.com/api/characters/'], // Adicione o domínio da sua API aqui
    },

    rewrites: () => 
    { // / retona um arr de obj
        return [
            {
                source: "/",
                destination: "/home",

            },
            {
                source: "/func_axios",
                destination: "/pageAxios",

            },
            {
                source: "/func_fetch",
                destination: "/pageFetch",

            },
            {
                source: "/server_side", // em portugueds
                destination: "/serverSide",

            },
        ]
    }
};

export default nextConfig;
