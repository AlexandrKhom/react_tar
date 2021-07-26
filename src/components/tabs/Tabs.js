import React from "react";

export function Tabs({tabs, change}) {

    return (
        <div>
            {tabs.map(el => (
                <button key={el.id}
                style={{background: change === el.name ? 'green' : 'yellow'}}
                onClick={el.clickFun}
                >
                    {el.name}
                </button>
            ))}
        </div>
    );
}
