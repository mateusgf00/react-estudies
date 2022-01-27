import React from 'react'

const Planet = (props) => {
    if (props.description){
        return (
            <div>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <p>{props.satelite}</p>
            </div>
        )
    }
    
}

export default Planet