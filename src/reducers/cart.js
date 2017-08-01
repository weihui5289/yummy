let carts ={
  num:0,
  dishes:{

  },

}

export default function cartReducer (state=carts,action){
  switch (action.type){
    case "ADD_CART":
      // console.log(action)
      let all={
        ...state.dishes,[action.dishId]:action.food
      }
      return {...state,num:state.num+1,dishes:all}
    default:
      return state
  }
}
