
import AddToDoList from "./AddToDoList.jsx";
import ShowToDoList from "./ShowToDoList.jsx";
import Header from "./Header.jsx";
import {useEffect, useState} from "react";
import Footer from "./Footer.jsx";

function App() {
    const[tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks") )|| []);
    const [newTasks, setNewTasks] = useState({});
  useEffect(()=>{
      localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);
  return(
      <div>
        <Header  />
        < AddToDoList tasks={tasks} setTasks={setTasks} newTasks={newTasks} setNewTasks={setNewTasks}/>
        < ShowToDoList tasks={tasks} setTasks={setTasks} newTasks={newTasks} setNewTasks={setNewTasks}/>
       <Footer></Footer>
      </div>
  )
}

export default App
