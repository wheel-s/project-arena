    
    
export default async function get_car(limit:number, page:number){

        
const response = await fetch(`http://127.0.0.1:8000/cars?limit=${limit}&page=${page}`)
    
if(!response.ok){
        console.log("null")
    }
    const data  = await response.json()
}
