import React, { Fragment, useState } from 'react';

const Form = (props) => {
    const [title, setName] = useState('')
    const handleChange = event => setName(event.target.value)

    const handleSubmit = event => {
        props.addPlanet({title:title})
        event.preventDefault();
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" value={title} onChange={handleChange}></input>
                </div>
                <br/>
                <input type="submit"></input>
            </form>
        </Fragment>
    )
}

export default Form;