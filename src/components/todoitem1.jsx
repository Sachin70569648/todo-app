function TodoItem1({todoItem,todoDate}){

  
  return<div class="container ">
    <div className='row row1'>
        <div className='col-6'>
          {todoItem}
         
        </div>
        <div className='col-4'>
          {todoDate}
         
        </div>
        <div className='col-2'>
          <button className='btn btn-danger button1'>delete</button>
        </div>
     
       </div>

  </div>
}
export default TodoItem1;