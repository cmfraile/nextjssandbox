<<<<<<< HEAD:src/app/routes/list/page.tsx
import query from "../../components/query"
import { digimon } from "../../interfaces/digimon"
import { DigiButton } from "../../components/digimon";
=======
import query from "@/components/query";
import { digimon } from "../../interfaces/digimon"
import { DigiButton } from "@/components/digimon";
>>>>>>> desacople:src/app/list/page.tsx

const main = async() => {

    const digimon = await query<digimon[]>('https://digimon-api.vercel.app/api/digimon').then( resp => resp.slice(0,10) ) ;

    return  <div>
                <h3>Lista de digimones : </h3>
                { digimon.slice(0,10).map( (x,i) => <DigiButton digimon={x} key={i} /> ) }
            </div> ;

}

export default main