import React,{useState} from 'react'

function TodoListjs(){
const [items, setItems] = useState([]);
const [newTask, setNewTask] = useState("");
const [newDesc, setNewDesc] = useState("");

function toggleStatus(index) {
  const updatedItems = [...items];
  updatedItems[index].status = !updatedItems[index].status;
  setItems(updatedItems);
}
  function handleInputChange(event){
    const {name,value} = event.target;
    if(name === "task"){
      setNewTask(value);
    }
    if(name === "desc"){
      setNewDesc(value);
    }
  }
  function addTask() {
    if (newTask.trim() !== "" && newDesc.trim()!=="") {
      const isDuplicate = items.some(
        (item) =>
          item.task.toLowerCase() === newTask.trim().toLowerCase() 
      );
  
      if (isDuplicate) {
        alert("This task already exists!");
        return; // Don't add duplicate
      }
      const newTodo = {
        title: newTask,
        description: newDesc,
        completed: false
      };
  
      fetch('http://localhost:8080/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo)
      })
        .then(res => res.json())
        .then(savedTodo => {
          setItems(prev => [...prev, savedTodo]);
          setNewTask("");
          setNewDesc("");
        })
        .catch(err => console.error("Failed to add todo:", err));
    }
    }
  }
  // function addTask(){
  //   if(newTask.trim()!==""){ 
  //    setTasks(t=>[...t,newTask]);
  //    setNewTask("");
  //   } 
  //   setNewTask("");
  // }
  function deleteTask(index){
    const updatedItem = items.filter((_,i)=>(i!==index));
     setItems(updatedItem);
  }
  function moveTaskUp(index){
     const updatedItem = [...items];
     if(index>0){
     [updatedItem[index],updatedItem[index-1]]=[updatedItem[index-1],updatedItem[index]];
      setItems(updatedItem);
     }
  }
  function moveTaskDown(index){
    const updatedItem = [...items];
    if(index<items.length-1){
      [updatedItem[index],updatedItem[index+1]]=[updatedItem[index+1],updatedItem[index]];
       setItems(updatedItem);
      }
  }
  
  return(<div className = "TodoList">
  <h1>To-Do-List</h1>
   <div className='box'>
       <input type="text" name="task"
        placeholder = "Enter the task..."
        value={newTask}
        onChange = {handleInputChange}
       />
       <input type="text" name="desc"
        placeholder = "Enter description..."
        value={newDesc}
        onChange = {handleInputChange}
       />
       <button className = "add-button"
              onClick = {addTask}>
              Add
       </button>
   </div>
   <ol>
       {items.map((item,index) =>
        <li key={index}>
          <input type="checkbox" name="status"
           checked={item.status}
           onChange={()=>toggleStatus(index)}
          />
          <span className="text"> {item.task} </span>
          <span className="text"> {item.desc} </span>
          <button className="delete-button"
           onClick={()=>deleteTask(index)}>
           Delete
           </button>
           <button className="move-button"
                      onClick={()=>moveTaskUp(index)}>
                      UP
           </button>
           <button className="move-button"
                      onClick={()=>moveTaskDown(index)}>
                      DOWN
           </button>
        </li>
       )}
   </ol>

   </div>
  )

}

export default TodoListjs;