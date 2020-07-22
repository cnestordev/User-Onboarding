import React from 'react'
import styled from 'styled-components'

const UserContainer = styled.div`
    border: 1px solid transparent;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    padding: 2% 3%;
    margin: 1%;
    background: #080808;
`

function User({ user }) {
    return (
        <UserContainer>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
        </UserContainer>
    )
}

export default User