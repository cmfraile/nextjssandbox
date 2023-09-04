'use client'

import { useState } from "react"
import { digimon } from "../interfaces/digimon"
import styles from '../styles/linkbar.module.css';
import Link from "next/link";

interface digibutton {digimon:digimon};

const DigiButton = ({ digimon }:digibutton) => {

    const [ unused , setIsUnused ] = useState<boolean>(true);

    return(
        <button type="button" 
                className={`btn ${ (unused) ? 'btn-secondary' : 'btn-danger' } ${styles.linkbar}`}
                onClick={ () => setIsUnused(v => !v) }
        > {digimon.name} </button>
    );

}

//const DigiDetail = ({ digimon }:digibutton) => <Link href={}></Link>


export { DigiButton }