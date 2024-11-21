import React, { useState } from 'react'

function UseStudentState() {
 const [count,setCount]=useState(0)

 increment=>{
    setCount(count+1);
 }


  return (
<>
    <div style={{color:'red',border:'2px'}}>{count}</div>
    <div><button id='btn' style={{margin:'20px'}}></button></div>
    
</>
  )
}

export default UseStudentState