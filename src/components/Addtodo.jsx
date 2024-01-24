import { useState } from "react";

function AddTodo({handleClick}){
 let [todoitem ,settodoitem]=useState();
 let [tododate ,settododate]=useState();
 



  const handleItem=(event)=>{
    console.log(event.target.value);
  settodoitem(event.target.value);
  
  
 



  }
const handleDate=(event)=>{
  settododate(event.target.value);
  



}
const onhandle=()=>{
 
  handleClick(todoitem,tododate);
  settododate('');
  settodoitem('');
 
 

}


  return  <div class="container text-center">
  <div className='row row1'>
    <div className='col-6'>
     <input type='text' placeholder="enter todo here" onChange={handleItem} value={todoitem} />
    </div>
    <div className='col-4'>
      <input type="date" onChange={handleDate} value={tododate}/>
    </div>
    <div class='col-2'>
      <button className='btn btn-success button1'
     onClick={onhandle}

       
        
        
       
      
      >add</button>
    </div>
 
   </div>
   </div>
}
export default AddTodo;