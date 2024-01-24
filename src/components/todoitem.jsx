function TodoItem({todoItem,todoDate,handleDelClick}){
 
  return <div class="container ">
     <div class='row row1'>
   <div class='col-6'>
     {todoItem}
    
   </div>
   <div class='col-4'>
   {todoDate}
    
   </div>
   <div class='col-2'>
     <button class='btn btn-danger button1' onClick={()=>handleDelClick(todoItem)}>delete</button>
   </div>

  </div>


  </div>
 

  
  
}
export default TodoItem;