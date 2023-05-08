import { AuthContext } from "@/contexts/AuthContext";
import { useContext, useState } from "react"

export default function Home() {

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const {signIn} = useContext(AuthContext);
  //corrigir any
  const onChangeLogin = (evt: any) => {
    setLogin(evt.target.value)
  } 
  const onChangeSenha = (evt: any) => {
    setSenha(evt.target.value)
  } 

  //corrigir any
  const sendLogin = async(evt: any) => {
    evt.preventDefault();
    signIn(login, senha)
  }

  return (
    <main className="flex min-h-screen  flex-col items-center justify-center p-24">
      <form onSubmit={sendLogin} method="post" className="flex flex-col gap-2 border border-black p-4 ">
        <h1 className="font-bold text-5xl mb-4">Login</h1>
        <label htmlFor="login">Usuario:</label>
        <input className="mb-4" type="text" name="login" value={login} onChange={onChangeLogin} />
        
        <label htmlFor="login">Senha:</label>
        <input className="mb-4" type="text" name="senha" value={senha} onChange={onChangeSenha} />

        <button className="border border-cyan-800 bg-slate-400 p-3 rounded-full" type="submit" onSubmit={sendLogin}>Submit</button>

      </form>
    </main>
  )
}
