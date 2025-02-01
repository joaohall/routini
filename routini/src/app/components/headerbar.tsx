import { useState, useEffect } from "react";
import EditorPopup from "./editorPopup";
import SearchIcon from '../../assets/icons/search.svg'

export default function HeaderBar() {
  return (
    <header className="w-full flex flex-row justify-between  border border-t-0 border-x-0 border-white/10 text-white font-semibold p-4">
      <a className="w-42 font-normal">Hierarquia de tarefas</a>
      <form className="w-1/3 font-normal flex bg-neutral-800 gap-2  border-white/10 border rounded px-2 font-sm">
        <img src={SearchIcon} width={15}/>
        <input
          className="w-full outline-0 text-sm "
          placeholder="Pesquise as suas tarefas..."
          type="text"
          name="search"
        ></input>
      </form>
      <div className="w-42">
        <EditorPopup />
      </div>
    </header>
  );
}
