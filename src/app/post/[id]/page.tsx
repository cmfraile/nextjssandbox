
interface paramsProps { params : {id:string} }
const main = ({params:{id}}:paramsProps) => <h1>ID : {id}</h1>

export default main