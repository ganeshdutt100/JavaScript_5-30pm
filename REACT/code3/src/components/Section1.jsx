import React from 'react'

export const Section1 = (props) => {
  return (
    <div>
<div className="card" style={{width: '18rem'}}>
<p>{props.image}</p>

  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.para}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

    </div>
  )
}
