import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import { api } from "@/pages/api/axios";

type AuthContextType = {
    isAuthenticated: boolean;
    tokenUser: any;
    nameUser: any;
    signIn: (login: String, senha: String) => Promise<void>
}

type SignInData = {
    login: String;
    senha: String;
}


export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
    
    //setar type for user
    const [tokenUser, setTokenUser] = useState(null); 
    const [nameUser, setNameUser] = useState(''); 
    
    const isAuthenticated = !!tokenUser;

    useEffect(() => {
      const { 'parkingauth.token': token } = parseCookies();
    }, [])

    async function signIn(login: String, senha: String) {
       
        try {
          const response = await fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': 'http://localhost:8080/*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'    
            },
            body: JSON.stringify({login, senha})
          })
          const json = await response.json()
          setCookie(undefined, 'parkingauth.token', json.tokenJWT, {
            maxAge: 60 * 60 * 1, // 1 hour
          })

          api.defaults.headers['Authorization'] = `Bearer ${json.tokenJWT}`;

          setTokenUser(json.tokenJWT)
          setNameUser(`${login}`)
          Router.push('dashboard');

        } catch (e) {
          console.log(e);
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, tokenUser, nameUser }}>
            {children}
        </AuthContext.Provider>
    )
}