import Navbar from "./components/navbar"
import { Routes, Route } from "react-router-dom";
import FastTodo from "./screens/fastTodo";
import ScheduleTodo from "./screens/scheduleTodo";
import HierarchyTodo from "./screens/hierarchyTodo";
import HeaderBar from "./components/headerbar";

export default function App() {
    return (
        <article className="w-full h-screen flex bg-[#161616] ">
            <Navbar />
            <section className=" -outline-offset-0 outline outline-white/10 w-full">
                <HeaderBar />
                <div className="p-4">
                <Routes>
                    <Route path="/fasttodo" index element={<FastTodo />}></Route>
                    <Route path="/scheduletodo" element={<ScheduleTodo />}></Route>
                    <Route path="/hierarchyTodo" element={<HierarchyTodo />}></Route>
                </Routes>
                </div>
            </section>
        </article>
    )
}