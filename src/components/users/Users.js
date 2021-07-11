import React from "react";

export function Users({users}) {

    return (
        <div>
            {users.map(user => (<h1>{user.id}- {user.name}</h1>))}
        </div>
    );
}
