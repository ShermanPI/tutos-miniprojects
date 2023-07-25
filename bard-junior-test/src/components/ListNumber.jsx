export default function ListNumber({number, index, onClick}){
  const handlerClick = ()=>{
    onClick(index)
  }

  return(
      <li className="list-item" key={index} onClick={handlerClick}>
        {number ?? ''}
      </li>
  )
}