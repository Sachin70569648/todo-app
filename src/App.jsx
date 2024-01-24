import AppName from './components/todoname'
import AppTodo from './components/Addtodo'


import AppItem from './components/appitem'
import './App.css';
import { useState } from 'react';
import Welcome from './components/welcomemessage';



function App() {
  
 
  let [todoItem ,setnewtododate]=useState([]);
  const handleClick=(todoitem,tododate)=>{
   

    
    let ud={name:todoitem,date:tododate};
    let fd=[...todoItem,ud]
    setnewtododate(fd);
  
  
    
  }
  const onhandle=(todoitemName)=>{
    let newTodo= todoItem.filter((item)=>(item.name!==todoitemName))
    setnewtododate(newTodo);

  }
  

 
 

return <center class="todo-container">
    <AppName></AppName>
    <AppTodo handleClick={handleClick} />
    <Welcome todoItem={todoItem}/>
    <AppItem todoItem={todoItem} onhandle={onhandle}/>
    
    
    </center>
    
} 
   
    


export default App
