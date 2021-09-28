import React from "react";

export function Tabs({tabs, selectT}) {

    return (
        <div>
            {tabs.map(el => <button key={el.id}
            style={{background: selectT === el.body ? 'blue' : 'silver'}}
            onClick={el.clickHandler}
            >{el.body}</button>)}
        </div>
    );
}
