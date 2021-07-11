
import React from "react";

export function Tabs({tabs, change}) {

    return (
        <div>
            {tabs.map(el => (<button
            style={{background: change === el.title ? 'green' : 'silver'}}
            onClick={el.clickF}>

                {el.title}
            </button>))}
        </div>
    );
}
