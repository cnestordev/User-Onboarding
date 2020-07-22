import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
`

const FormBox = styled.form`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
`
const ErrorBox = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Label = styled.label`
    color: #fff;
    text-align: center;
    margin-top: 1%;
`

const Input = styled.input`
    background: #fff;
    border: 1px solid #fff;
    border-radius: 3px;
    box-shadow: 0 0 2px 1px #3e3e3e;
    color: #000;
    padding: 2%;
    width: 50%;
    margin: 1% auto;
    font-size: 1rem;
`

const Checkbox = styled.input`
    background: #fff;
    border: 1px solid #fff;
    border-radius: 3px;
    color: #000;
    padding: 2%;
    width: 50%;
    margin: 1% auto;
    font-size: 1rem;
`

const Button = styled.button`
    width: 30%;
    margin: 1% auto;
    padding: 1%;
`

const Paragraph = styled.p`
    color: #ff5959;
    margin: 0.5%;
`

function Form({ submit, change, check, disabled, data, errors }) {
    return (
        <FormContainer>
            <FormBox onSubmit={submit} autoComplete="off">
                <Input onChange={change} value={data.name} type="text" id="name" name="name" placeholder="first name" />
                <Input onChange={change} value={data.email} type="email" id="email" name="email" placeholder="email" />
                <Input onChange={change} value={data.password} type="password" id="password" name="password" placeholder="password" />

                <ErrorBox>
                    {errors.name.length > 0 && <Paragraph>{errors.name}</Paragraph>}
                    {errors.email.length > 0 && <Paragraph>{errors.email}</Paragraph>}
                    {errors.password.length > 0 && <Paragraph>{errors.password}</Paragraph>}
                    {errors.hasAcceptedTOS.length > 0 && <Paragraph>{errors.hasAcceptedTOS}</Paragraph>}
                </ErrorBox>

                <Label htmlFor="tos">Terms of Service</Label>
                <Checkbox onChange={check} type="checkbox" checked={data.hasAcceptedTOS} id="tos" name="hasAcceptedTOS" value={!data.hasAcceptedTOS} />
                <Button disabled={disabled}>Submit</Button>
            </FormBox>
        </FormContainer>
    )
}

export default Form