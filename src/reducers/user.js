let userInfo={
  denglu:false,
  username:""
}


export default function userReducer(state=userInfo,action){
  switch(action.type){
    case "ADD_USER":
      return {denglu:true,username:action.username}
    default:
      return state;
  }
}
