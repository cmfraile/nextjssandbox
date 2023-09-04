import query from "@/components/query";
import { digimon } from "@/interfaces/digimon";
import Link from "next/link";

const ToDetail = ({digimon}:{digimon:digimon}) =>
    <Link
        href={`/detail/${digimon.name}`}
    >
        <button type="button" className="btn btn-secondary m-1"> { digimon.name } </button>
    </Link>

const main = async() => {

    const digimon = await query<digimon[]>('https://digimon-api.vercel.app/api/digimon').then( resp => resp.slice(0,10) );

    return  <div>
                <h3> Para entrar en detalle : </h3>
                { digimon.slice(0,10).map( (x,i) => <ToDetail key={i} digimon={x}/> ) }
            </div> ;

}

export default main