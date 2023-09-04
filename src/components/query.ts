
const query = <T>(url:string) => new Promise<T>( async(rs,rj) => {

    await fetch(url,{next:{revalidate:600}})
    .then(resp => resp.json())
    .then(rs)
    .catch(rj)

})

export default query