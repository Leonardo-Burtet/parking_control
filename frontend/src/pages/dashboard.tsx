import { AuthContext } from "@/contexts/AuthContext";
import { useContext, useEffect } from "react"
import { parseCookies } from 'nookies';
import { GetServerSideProps } from "next";
import { api, getAPICliente } from "./api/axios";

export default function Dashboard() {

    const {tokenUser, nameUser} = useContext(AuthContext);

    useEffect(() => {
        api.get('/clientes')
        .then(function (response) {
            // handle success
            // console.log(response.data.content);
          })
    }, [])

    console.log(tokenUser, nameUser)

   return (
    <main className="flex container min-h-screen flex-col items-center justify-between p-24">
        <h1>Sistema de estacionamento</h1>
        <div className="flex justify-around gap-4 w-full h-full">
            <div className="w-1/3 min-h-[400px] bg-red-400 h-full text-white">
                <h2>Estacionamento</h2>
                <button></button>
            </div>
        </div>
        <p>{ nameUser }</p>     
    </main>
   )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const apiClient = getAPICliente(ctx);
    const {['parkingauth.token']: token } = parseCookies(ctx)

    if(!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    await apiClient.get("/clientes");

    return {
        props: {}
    }
}