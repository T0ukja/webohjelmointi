import React from 'react';
import styles from './SearchResult.module.css';
import Tähdet from './starrating'
import { useState } from 'react';
export default function SearchResult(props) {


  const [data, setData] = useState('');
  const parenttochild = () => {

setData(props.star);
}
  return (

    <div className={ styles.kuva}>

        <div>

            <img src={`/images/${props.image}`} /></div>
          <div className={ styles.nimi }>{ props.name }</div>
          <div>{ props.author }</div>
          <Tähdet arvo = {props.star}/>
        <Hinnat hinta = {props.price}/>
         
        </div>

  )
  
}

function Hinnat(props){

if (props.hinta < 100){
  return(
<div>
  <div className= {styles.hinta1}>{Math.floor(props.hinta)}</div>
  <div className= {styles.hinta2}>{Math.round((props.hinta- Math.floor(props.hinta) )* 100)}</div>
  </div>
  );
}

else {
return (
<div>
  <div className= {styles.hinta1}>{Math.floor(props.hinta)}</div>
  <div className= {styles.hinta3}>{Math.round((props.hinta- Math.floor(props.hinta) )* 100)}</div>
  </div>
);
}
}