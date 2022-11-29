
import { USERFAIL, USERLOADING, USERSUCCESS } from "./actionType"

import { getLocalData, saveLocalData  } from "../../Utils/localStorage";

const initState = {
  isAuth : {},
  loading: false,
  error : false
}

export const userReducer = (store=initState, {type,payload})=>{
    
  switch(type){
    case USERLOADING:

            return {
              ...store,
              loading: true,
              error: false,
            };
    case USERSUCCESS:
      saveLocalData("token",true)
    return {...store , isAuth:payload}
    case USERFAIL:
    
            return {
              ...store,
              error: true,
              loading: false,
            };
      
    default : 
    return store
  }

}

