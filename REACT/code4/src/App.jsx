// import { useState } from 'react'

import { File } from './components/File'
import 'bootstrap/dist/css/bootstrap.css'
import { File2 } from './components/File2'
import { File3 } from './components/File3'
import { File4 } from './components/File4'

function App() {
  // const [count, setCount] = useState(0)

  // let a =  23
  // let a1= 34;

  return (
    <>
     {/* <File para="para" num={a} ></File> */}
     <File2/>
     <File3></File3>
     <File4/>
    </>
  )
}

export default App
