/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['dragonball-api.com'], // Adicione o domínio da sua API aqui
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
