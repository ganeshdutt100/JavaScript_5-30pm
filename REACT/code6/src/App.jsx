import { useState } from 'react'


import './App.css'

function App() {

  // let a = 90;
  // let b = () =>{
  //   return a + 1;
  // }
  //1 
   const [a,b] =  useState(87);
    
   let fun =() =>{
    b(a+1);
   }

   function Neelu(){
    b(a+1);
   }
  return (
    <>
      
        
        {/* <button onClick={() => b((a) => a + 1)}>
          count is {a}
        </button>

        <button onClick={()=>b((a)=> a+1) }>{a}</button> */}
         
<button onClick={fun}>{a}</button>
{/* <button onClick={Neelu}>{a}</button> */}

    </>
  )
}

export default App
