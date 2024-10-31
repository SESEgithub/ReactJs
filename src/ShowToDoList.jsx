
import { MdOutlineDeleteOutline } from "react-icons/md";
import { TiEdit } from "react-icons/ti";

// eslint-disable-next-line react/prop-types
export default function ShowToDoList({tasks, setTasks,setNewTasks}){

    function  handleEdit(id){
// eslint-disable-next-line react/prop-types
const selected=tasks.find(e=>e.id === id);
setNewTasks(selected)

 }
    function handleDelete(id){
        let userResponse = confirm("Are you sure you want to delete this task?");

        // Check the response
        if (userResponse) {
            // User clicked "OK"
            // eslint-disable-next-line react/prop-types
            setTasks( tasks.filter(task => task.id !== id))
            alert(" task deleted successfully.");
        } else {
            // User clicked "Cancel"
            alert("task cancelled from deleting.");
        }


    }
    return(
        <>
            <div className={"flex flex-row justify-between bg-fuchsia-700 h-12 mt-2"}>
                <div className={"ml-5 mt-2"}><span className={"capitalize text-2xl"}> todo</span>
                    {/* eslint-disable-next-line react/prop-types */}
                   <span className={"ml-1 text-3xl text-blue-800"} >{tasks.length}</span>
                   </div>
                <button onClick={()=>setTasks([])}  className={"bg-blue-500 h-8 w-20 rounded mr-6 mt-2"}>clear all</button>
            </div>
            <div className="m-2 border border-black flex flex-col overflow-auto lg:flex-row flex-wrap ">
                {/* eslint-disable-next-line react/prop-types */}
            {tasks.map((task) => (
                <div key={task.id} className="flex flex-row m-1 rounded  justify-between  max-h-40 max-w-96 bg-cyan-100  ">
                    <div className={'flex flex-col justify-center ml-2'}>
                        <h1 className={"capitalize text-xl tablet:text-2xl"}>{task.name}</h1>
                        <p>{task.time}</p>
                    </div>
                    <div className={'flex flex-row justify-center'}>
                        <button onClick={()=>handleEdit(task.id)}><TiEdit className={"text-3xl text-blue-300"}/></button>
                        <button onClick={()=>handleDelete(task.id)}><MdOutlineDeleteOutline className={"text-3xl text-pink-600"}/></button>
                    </div>
                </div>
            ))}

        </div>
        </>
    )
}