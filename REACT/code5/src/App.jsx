import { useState } from 'react'
import PropsFile from './Components/PropsFile'

function App() {
  const [count, setCount] = useState(0)
  let alertFunction = () => alert("i am Clicked!")

  const obj1 ={
    name :'Rudra ',
    age : 24,
    alertFun : alertFunction,
    hobbies : 'Coding',
    title    :  'Student',
    address : 'xyz'
  }

  return (
    <>
      <PropsFile {...obj1} />

      <button onClick={() => setCount(count + 1)}>
        Click me {count}
      </button>
      <button onClick={() => setCount(count -1)}>
        Click me {count}
      </button>
    </>
  )
}

export default App



const [value1 , value2] = useState(34) 