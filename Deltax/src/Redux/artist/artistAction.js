import axios from "axios"
import { ARTISTFAIL, ARTISTLOADING, ARTISTSUCCESS } from "./actionType"


const artistLoading=()=>{
    return{
        type: ARTISTLOADING ,    
    }
}


const artistSucces=(payload)=>{
    return {
        type:ARTISTSUCCESS ,
        payload
    }
}


const artistFail=(payload)=>{
    return{
        type: ARTISTFAIL ,
        payload
    }
}


export const getArtist=(payload)=>(dispatch)=>{
    dispatch(artistLoading());
  return  axios("https://deltaxmusic-api.herokuapp.com/artist")
    .then((res)=>dispatch(artistSucces(res.data)))
    .then((err)=>dispatch(artistFail(err)))
}


export const AddArtist=(payload)=>(dispatch)=>{
    dispatch(artistLoading());
  return  axios.post("https://deltaxmusic-api.herokuapp.com/artist",payload)
    .then((res)=>dispatch(artistSucces(payload)))
    .then((err)=>dispatch(artistFail(err)))
}
