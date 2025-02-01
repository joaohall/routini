export default function LoginPage(){
    return(
        <main className="w-full h-screen flex-col p-4 justify-between items-center flex bg-[#161616] ">
            <div/>
            <article className="shadow-lg w-md p-6 font-bold text-white rounded -outline-offset-1 outline outline-white/10 bg-[#111111]">
                <div className="mb-4">
                    <h1 className="text-2xl ">Routini</h1>
                    <p className="text-sm font-normal">Facilitando a sua vida.</p>
                </div>
                <form className="font-normal flex flex-col gap-2">
                    <input className="w-full rounded p-2 bg-neutral-900" placeholder="Digite o seu email" type="email"></input>
                    <input className="  w-full rounded p-2 bg-neutral-900" placeholder="Digite sua senha" type="password"></input>
                    <button className="mt-4 -outline-offset-1 outline cursor-pointer outline-white/10 py-2 w-full hover:bg-neutral-900 transition-all rounded">Acessar o seu Routini</button>
                </form>
               <div className="flex flex-col font-normal gap-2 text-sm mt-4 opacity-75 text-blue-400">
                <a href="#">Esqueci a minha senha</a>
                <a href="#"> Criar uma conta</a>
               </div>
            </article>
            <div className="w-full flex justify-end text-white text-xs opacity-40">
               <a href="#">
               Saiba mais sobre os Termos de serviços
               </a>
            </div>
        </main>
    )
}