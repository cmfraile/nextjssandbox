
const query = <T>(url:string) => new Promise<T>( async(rs,rj) => {

    await fetch(url)
    .then(resp => resp.json())
    .then(rs)
    .catch(rj)

})

export default query