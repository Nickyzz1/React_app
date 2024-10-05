/** @type {import('next').NextConfig} */
const nextConfig = {

    images:
    {
        remotePatterns: [
            {protocol: "https", 
            hostname: "rickandmortyapi.com"}]
    },

    rewrites: () => 
    { 
        return [
            {
                source: "/",
                destination: "/home",

            },
            {
                source: "/pagina-com-axios",
                destination: "/axiosPage",

            },

            {
                source: "/calculadora",
                destination: "/calculadora",

            },
            {
                source: "/pagina-com-fetch",
                destination: "/fetchPage",

            },

            {
                source: "/pagina-tailwind",
                destination: "/tailwindPage",

            },


        ]
    }
};

export default nextConfig;
