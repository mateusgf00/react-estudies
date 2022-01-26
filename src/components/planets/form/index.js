import React, { Fragment, useState } from 'react';

const initAllState = {
    title: '',
    description: ''
}

const Form = (props) => {
    const [fields, setFields] = useState(initAllState)
    const handleFieldsChange = event => setFields({
        ...fields,
        [event.currentTarget.name]: event.currentTarget.value
    })

    const handleSubmit = event => {
        props.addPlanet(fields)
        event.preventDefault();
        setFields(initAllState)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" name="title" value={fields.title} onChange={handleFieldsChange}></input>
                </div>
                <div>
                    <label htmlFor="Description">Description:</label>
                    <input id="name" type="text" name="description" value={fields.description} onChange={handleFieldsChange}></input>
                </div>
                <br/>
                <input type="submit"></input>
            </form>
        </Fragment>
    )
}

export default Form;