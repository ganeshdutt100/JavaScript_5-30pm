import React from 'react'
import PropTypes from 'prop-types'
export const File = (props) => {
  return (
    <div>
    <p>{props.para}</p>
    <p>{props.num}</p>
    <button>Click me </button>
    </div>
  )
}

File.propTypes = {
    para:PropTypes.string.isRequired,
    num: PropTypes.number.isRequired
}
