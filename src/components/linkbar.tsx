import Link from "next/link";
import styles from '../styles/linkbar.module.css'

interface label {label:string,link:string};
const labelCraft = (label:string):label => {
    if(label == 'home'){ return {label:'home',link:'/'} }
    return {label,link:`/${label}`}
};

const labels:label[] = ['home','list','detail'].map(labelCraft) ;

const LabelLinkComponent = () => 
    labels.map((x,i) => 
        <Link href={x.link} key={i} className={styles.linkbar}>
            <button type="button" className="btn btn-primary"> {x.label} </button>
        </Link>
    )

export default LabelLinkComponent