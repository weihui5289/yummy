
let defaultAppState ={
  showAlert:false,
  alertMeg:"默认msg"
}

 function appReducer(state=defaultAppState,action){
  switch(action.type){
    case "SHOW_ALERT":
      return {...state,showAlert:true,alertMeg:action.MSG}
    case "HIDE_ALERT":
      return {...state,showAlert:false,alertMeg:""}
    default:
      return state
  }
}

export default appReducer
