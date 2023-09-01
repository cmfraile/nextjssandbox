'use client'

import { useState } from "react"
import { digimon } from "../interfaces/digimon"
import styles from '../styles/linkbar.module.css';

const DigiButton = ({digimon}:{digimon:digimon}) => {

    const [ unused , setIsUnused ] = useState<boolean>(true);

    return(
        <button type="button" 
                className={`btn ${ (unused) ? 'btn-primary' : 'btn-danger' } ${styles.linkbar}`}
                onClick={() => setIsUnused(v => !v)}
        >{digimon.name}</button>
    );

}

const DigiButtonRendering = ({digimonList}:{digimonList:digimon[]}) => digimonList.map( (x,i) => <DigiButton digimon={x} key={i}/>);

export default DigiButtonRendering