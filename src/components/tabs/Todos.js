import React from "react";

export function Todos({todos}) {

    return (
        <div>
            {todos.map(el => (<h2 key={el.id}>
                {el.id} - {el.title}
            </h2>))}
        </div>
    );
}
