import React from 'react'
import User from './User'

function Users({ users }) {

    if (users.length === 0) {
        return <h2>No users have been added yet!</h2>
    }

    const userList = users.map(user => {
        return <User user={user} />
    })

    return (
        <div>
            {userList}
        </div>
    )
}

export default Users