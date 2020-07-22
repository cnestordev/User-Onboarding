import React from 'react'

function Form({ submit, change, check, disabled, data, errors }) {
    return (
        <div>
            <form onSubmit={submit}>
                <input onChange={change} value={data.name} type="text" id="name" name="name" placeholder="first name" />
                <input onChange={change} value={data.email} type="email" id="email" name="email" placeholder="email" />
                <input onChange={change} value={data.password} type="password" id="password" name="password" placeholder="password" />

                <label htmlFor="tos">Terms of Service</label>
                <input onChange={check} type="checkbox" checked={data.hasAcceptedTOS} id="tos" name="hasAcceptedTOS" value={!data.hasAcceptedTOS} />
                <button disabled={disabled}>Submit</button>
            </form>
            <div>
                <p>{errors.name}</p>
                <p>{errors.email}</p>
                <p>{errors.password}</p>
                <p>{errors.hasAcceptedTOS}</p>
            </div>
        </div>
    )
}

export default Form