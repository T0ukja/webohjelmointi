import React from 'react'

import Paauutinen from './PaaUutinen';
import styles from './Sivuutiset.module.css';
export default function Sivuutiset(props) {
    return (

<div>


  <div className={styles.nav}>
   <h1 >
{props.otsikko}
     </h1>
  <span className= {styles.numero}>   {props.numero}</span>   <span className= {styles.kirjoitus}> {props.laihe}</span>{props.tieto}  

  <div className={styles.asettelu}>
</div>

  </div>

 

  <div className={styles.content}>

  </div>

 



         

</div>

    )
}
