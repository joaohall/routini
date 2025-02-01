import { Link } from "react-router-dom"
import Clocktodo from "../../assets/icons/clocktodo.svg"
import FastTodo from "../../assets/icons/fasttodo.svg"
import HierarchyTodo from "../../assets/icons/graph.svg"
import ProfilePicturePlaceholder from "../../assets/placeholders/background.png"

export default function Navbar() {
    const name = 'João'
    return (
        <nav className="text-white justify-between flex flex-col pb-6 tracking-tight w-1/4 shadow-lg   bg-[#111111]">
            <div>
                <div className="flex flex-col mt-4">
                    <a className="opacity-90 font-semibold mb-2 px-6">Organização de tarefas</a>
                    <Link className="text-sm flex items-center hover:bg-neutral-800 px-6 py-0.5 opacity-75 hover:opacity-100 gap-1" to={'/app/fasttodo'}><img src={FastTodo} width={15} />Lista rápida</Link>
                    <Link className="text-sm flex items-center hover:bg-neutral-800 px-6 py-0.5 opacity-75  hover:opacity-100  gap-1" to={'/app/scheduletodo'}><img src={Clocktodo} width={15} />Rotina</Link>
                    <Link className="text-sm flex items-center hover:bg-neutral-800 px-6 py-0.5 opacity-75  hover:opacity-100  gap-1" to={'/app/hierarchyTodo'}><img src={HierarchyTodo} width={15} />Hierarquia de tarefas</Link>
                </div>
                <div className="flex flex-col mt-4">
                    <a className="opacity-90 font-semibold mb-2 px-6">Financeiro</a>
                    <Link className="text-sm flex items-center hover:bg-neutral-800 px-6 py-0.5 opacity-75  hover:opacity-100  gap-1" to={'/app/hierarchyTodo'}><img src={HierarchyTodo} width={15} />Despesas</Link>
                    <Link className="text-sm flex items-center hover:bg-neutral-800 px-6 py-0.5 opacity-75 hover:opacity-100 gap-1" to={'/app/fasttodo'}><img src={FastTodo} width={15} />Despesas fixas</Link>
                    <Link className="text-sm flex items-center hover:bg-neutral-800 px-6 py-0.5 opacity-75  hover:opacity-100  gap-1" to={'/app/hierarchyTodo'}><img src={HierarchyTodo} width={15} />Investimentos</Link>
                    <Link className="text-sm flex items-center hover:bg-neutral-800 px-6 py-0.5 opacity-75  hover:opacity-100  gap-1" to={'/app/hierarchyTodo'}><img src={HierarchyTodo} width={15} />Compras</Link>
                </div>
                <div className="flex flex-col mt-4">
                    <a className="opacity-90 font-semibold mb-2 px-6">Acadêmico</a>
                    <Link className="text-sm flex items-center hover:bg-neutral-800 px-6 py-0.5 opacity-75 hover:opacity-100 gap-1" to={'/app/fasttodo'}><img src={FastTodo} width={15} />Lista rápida</Link>
                    <Link className="text-sm flex items-center hover:bg-neutral-800 px-6 py-0.5 opacity-75  hover:opacity-100  gap-1" to={'/app/scheduletodo'}><img src={Clocktodo} width={15} /> Lista programada</Link>
                    <Link className="text-sm flex items-center hover:bg-neutral-800 px-6 py-0.5 opacity-75  hover:opacity-100  gap-1" to={'/app/hierarchyTodo'}><img src={HierarchyTodo} width={15} />Hierarquia de tarefas</Link>
                </div>
                <div className="flex flex-col mt-4">
                    <a className="opacity-90 font-semibold mb-2 px-6">Saúde</a>
                    <Link className="text-sm flex items-center hover:bg-neutral-800 px-6 py-0.5 opacity-75 hover:opacity-100 gap-1" to={'/app/fasttodo'}><img src={FastTodo} width={15} />Lista de treino</Link>
                    <Link className="text-sm flex items-center hover:bg-neutral-800 px-6 py-0.5 opacity-75  hover:opacity-100  gap-1" to={'/app/scheduletodo'}><img src={Clocktodo} width={15} />Macros</Link>
                    <Link className="text-sm flex items-center hover:bg-neutral-800 px-6 py-0.5 opacity-75  hover:opacity-100  gap-1" to={'/app/hierarchyTodo'}><img src={HierarchyTodo} width={15} />Checklist</Link>
                </div>
                <Link className="text-red-600 px-6" to={'/'}>Voltar para login</Link>
            </div>
            <div className="flex flex-row items-center px-6 justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Olá, {name}!</h1>
                    <p className="text-sm opacity-70">Bem vindo ao seu Routini</p>
                </div>
                <div className="w-10 h-10 rounded-4xl overflow-hidden bg-white">
                    <img src={ProfilePicturePlaceholder} height={100} alt="Imagem de perfil do usuário" />
                </div>
            </div>
        </nav>
    )
}