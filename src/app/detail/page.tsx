import query from "@/components/query";
import { digimon } from "@/interfaces/digimon";

const main = async() => {

    const digimon = await query<digimon[]>('https://digimon-api.vercel.app/api/digimon').then( resp => resp.slice(0,10) );

    return  <div>
                <h3> Para entrar en detalle : </h3>
                { digimon.slice(0,10).map( (x,i) => <p key={i}>{x.name}</p> ) }
            </div> ;

}

export default main