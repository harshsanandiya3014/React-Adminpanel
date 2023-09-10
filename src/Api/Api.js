import axios from 'axios';
const url = 'http://localhost:3004';
const fetchData = (endpoint,id='')=>{
    return axios.get(`${url}/${endpoint}/${id}`).then((result)=>{
        return result.data
    })

} 

const deleteWork = (endpoint,id)=>{
    return axios.delete(`${url}/${endpoint}/${id}`).then((result)=>{
        return result.data
    })

}

const insert = (endpoint,data) =>{
    return axios.post(`${url}/${endpoint}`,data).then((result)=>{
        return result.data
    })
}


const update = (endpoint,id,data) =>{
    return axios.put(`${url}/${endpoint}/${id}`,data).then((result)=>{
        return result.data
    })
}
export default 
{
    fetchData,
    deleteWork,
    insert,
    update
}