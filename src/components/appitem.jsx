import TodoItem from './todoitem'
function  AppItem({todoItem,onhandle}){
  return<>
  {todoItem.map((item)=>(
     <TodoItem key ={item.name}todoItem={item.name} todoDate={item.date} handleDelClick={onhandle}/>

  ))}
 
  
 
  

  </>
}
export default AppItem;