import React from 'react'

type styleProp = {
  margin: string
}

type Tprops = {
    name: string
    location: string
    getAge: any
    style: styleProp
}

function Person(props: Tprops) {
  return (
    <div style={props.style}>
        <h3>{props.name}</h3>
        <p>{props.location}</p>
        <p>{props.getAge}</p>
    </div>
  )
}

export default Person