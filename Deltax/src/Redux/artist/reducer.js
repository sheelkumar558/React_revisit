import { ARTISTFAIL, ARTISTLOADING, ARTISTSUCCESS } from "./actionType";
  
  const initStore = {
    loading: false,
    error: false,
      artists:[] ,
  };
  
  export const ArtistReducer = (store = initStore, { type, payload }) => {
 
    switch (type) {
      case ARTISTLOADING :
        return {
          ...store,
          loading: true,
          error: false,
        };
  
      case ARTISTSUCCESS :
        return {
          ...store,
          loading: false,
          error: false,
          artists: payload,
        };
  
      case ARTISTFAIL : 
        return {
          ...store,
          error: true,
          loading: false,
        };
  
  
      default:
        return{
            store

        } 
    }
  };
  

  export default ArtistReducer;