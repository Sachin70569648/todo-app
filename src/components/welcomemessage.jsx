import style from './welcome.module.css'
const Welcome=({todoItem})=>{

  return <>{todoItem.length==0 && <p className={style.para}>enjoy your day</p> };
  </>


}
export default Welcome;