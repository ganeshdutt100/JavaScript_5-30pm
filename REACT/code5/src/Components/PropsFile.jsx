import React from 'react'

const PropsFile = ({name , age , alertFun , ...obj1}) => {
  return (
    <div>
        <p>My name is  : {name } , and my age : {age} </p>
        <button onClick={alertFun} >Click me</button>
        <pre>{JSON.stringify(obj1 , null ,2)}</pre>
        <pre>
        {/* Hello
         pankaj */}
        {/* <p>Hello</p>
        <p>Pankaj</p> */}
        {/* Pankaj */}
        </pre>
    </div>
  )
}
PropsFile.defaultProps ={
  name: 'John Doe',
  age: 30
}


export default PropsFile

