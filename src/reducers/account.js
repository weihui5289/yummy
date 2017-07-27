 let defaultAccountState ={
   denglu:false,
   currentUserName:""
 }

 export default function accountReducer (state=defaultAccountState,action){
   switch (action.type){
     case "SIGN_IN":
        return{...state,denglu:true,currentUserName:action.username}
     case "LOG_OUT":
        return {...state,denglu:false,currentUserName:""}
      default:
        return state
   }
 }
