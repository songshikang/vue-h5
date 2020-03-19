let mutations = {
    handleEdie(state,payload){
        console.log('今天周一',state,payload)
        state.title = payload 
    }
}
export default mutations