import { SONGFAIL, SONGLOADING, SONGSUCCESS } from "./actionType";
  
  const initStore = {
    loading: false,
    error: false,
    songs:[] ,
  };
  
  export const SongReducer = (store = initStore, { type, payload }) => {
 
    switch (type) {
      case SONGLOADING :
        return {
          ...store,
          loading: true,
          error: false,
        };
  
      case SONGSUCCESS :
        return {
          ...store,
          loading: false,
          error: false,
          songs: payload,
        };
  
      case SONGFAIL : 
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
  

  export default SongReducer;