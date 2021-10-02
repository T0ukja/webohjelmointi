import React from 'react'
import styles from './Paauutinen.module.css';
import kuva from './kuvat/kuva.png'
export default function Paauutinen(props) {
    return (

       
<div className={styles.content}>

<span className= {styles.paa}>
<span className = {styles.tyyli}> </span>
</span>
<img src={kuva} alt="logo" className= {styles.kuvamuoto}/> 



<div>
<span className = {styles.paaaihe}>
{props.paihe}
</span>
</div>

<div>
<span className= {styles.aihe}> {props.aihe}
{props.otsikko} <br />
{props.osasto} {props.aika}
</span>

</div>
        </div>




    )
}
