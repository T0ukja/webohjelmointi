import React from 'react'
import styles from './uutiset.module.css';
export default function Uutiset(props) {
    return (

        <div className={styles.container}>
            <span className={styles.header}> {props.aihe}:</span> {props.body}

        </div>
    )
}
