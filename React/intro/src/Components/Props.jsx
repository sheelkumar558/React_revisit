import React from 'react'

export const Props = (props) => {
  return (
    <div>
        <p>{props.children}</p>
        {props.hello}
    </div>
  )
}
