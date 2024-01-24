function TodoItem2(){
  let todoItem='go to college';
  let todoDate='6/10/2023'
  return <div class="container ">
     <div class='row row1'>
   <div class='col-6'>
     {todoItem}
    
   </div>
   <div class='col-4'>
   {todoDate}
    
   </div>
   <div class='col-2'>
     <button class='btn btn-danger button1'>delete</button>
   </div>

  </div>


  </div>
 

  
  
}
export default TodoItem2;