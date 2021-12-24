import React from 'react'

const Planet = (props) => {
    if (props.description){
        return (
            <div>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        )
    }else{
        return (
            <div>
                <h4>{props.title}</h4>
                <h4>{props.title}</h4>
            </div>
        )
    }
    
}

export default Planet