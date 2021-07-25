import React from "react";
import styles from './Test.module.css'
export function Test({title, price, about}) {

    return (
        <div>
<ul>
    <li className={styles.test}>{title || 'N/A'}</li>
    <li>{price ?? 'N/A'}</li>
    <li>{about}</li>
</ul>
        </div>
    );
}
