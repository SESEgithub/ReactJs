export default function AddToDoList({tasks, setTasks,newTasks,setNewTasks}){

    function handleSubmit(event){
        event.preventDefault()
        // eslint-disable-next-line react/prop-types
     if(newTasks.id){

         const time=new Date();
         const edited = tasks.map((singleTask)=>(singleTask.id === newTasks.id  ?
             {id:newTasks.id,time:`date ${time.toLocaleDateString()} time ${time.toLocaleTimeString()}`,name:event.target.ta.value} : singleTask));
            setTasks(edited)
         setNewTasks({})
     }
      else{
         const id=Math.floor(Math.random()*10000);
         const time=new Date();
         const newTask={id:id,time:`date ${time.toLocaleDateString()} time ${time.toLocaleTimeString()}`,name:event.target.ta.value};

         setTasks([...tasks,newTask])
         setNewTasks({})
     }
    }
    return(
        <div className={"flex justify-center mt-5  "}>
            <form onSubmit={handleSubmit} className ="flex flex-row">
                <input onChange={(e)=>setNewTasks({...newTasks,name:e.target.value})} name="ta" value={newTasks.name || ""}
                       className={"p-2 w-60 rounded border-2 border-amber-950 focus:border-4 lg:w-100"} type="text"/>
                <input className={"p-2 ml-2 rounded w-20 bg-green-600"} type="submit" value={ newTasks.id ? "update" :"Add" }/>
            </form>
        </div>
    )
}