import React from "react";

export function Users({users}) {

    return (
        <div>
            {users.map(user => (<h2 key={user.id}>
                {user.id} - {user.name}
            </h2>))}
        </div>
    );
}
