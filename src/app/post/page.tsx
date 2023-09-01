import query from "../components/query"
import { digimon } from "../interfaces/digimon";
import DigiButtonRendering from "../components/digimon";

const main = async() => {

    const digimon = await query<digimon[]>('https://digimon-api.vercel.app/api/digimon').then( resp => resp.slice(0,10) );

    return <DigiButtonRendering digimonList={digimon}/> ;

}

export default main