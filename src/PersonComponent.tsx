import React from 'react'



export interface Tprops {
    name: string
    location: string
    getAge: number
    index: number
}

function Person(props: Tprops) {
  return (
    <div data-testid={`people-${props.index}`} style={{margin: "2rem"}}>
        <h3>{props.name}</h3>
        <p>{props.location}</p>
        <p>{props.getAge}</p>
    </div>
  )
}

export default Person