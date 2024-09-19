import { useState } from 'react'

import { File } from './components/File'

function App() {
  const [count, setCount] = useState(0)

  let a =  23
  let a1= 34;

  return (
    <>
     <File para={a1} num={a} ></File>
    </>
  )
}

export default App
