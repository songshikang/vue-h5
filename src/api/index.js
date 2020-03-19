
import axios from 'axios'

export let apiGet = (url,params) => {
    return new Promise((resolve,reject)=>{
        axios.get(url,{
            params:params,
            headers: {
                contentType:'application/json;charset=UTF-8'
            },
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}