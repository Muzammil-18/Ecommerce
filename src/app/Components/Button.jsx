import React from 'react'

const Button = ({ width, height, bgColor, textColor, text,mtop}) => {
  return (
    <button style={{
        height:height,
        width:width,
        backgroundColor:bgColor,
        color:textColor,
        fontWeight: 'bold',
        marginTop: mtop
    }}>
        {text}</button>
  )
}

export default Button