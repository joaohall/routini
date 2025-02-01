export default function FastTodo() {
  const Task = () =>{
    return(
        <div className="rounded flex justify-between p-2 border items-center border-white/10">
            <div className="pl-2">
                <h1 className=" text-2xl font-semibold">Tirar o lixo do banheiro</h1>
                <p className="opacity-50 font-normal text-sm ">Você precisa tirar o lixo do banheiro Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloribus quod voluptate ab pariatur totam! Dolores, numquam dolorem magnam labore officiis suscipit eveniet, quia dolore, enim odio reprehenderit odit totam.</p>
            </div>
            <form className="flex items-center pr-8">
                <input type="checkbox" className="w-6 h-6 "></input>
            </form>
        </div>
    )
  }
  return (
    <section className="text-white">
        <Task/>
    </section>
  );
}
