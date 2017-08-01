let dishAccountState ={
  all:{

  }
}

export default function dishReducer (state=dishAccountState,action){
  switch (action.type){
    case "LOAD_DISHES":
       return{...state,all:action.dishes}
     default:
       return state
  }
}
