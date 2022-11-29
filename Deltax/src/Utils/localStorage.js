

const getLocalData=(key)=>{
    if(key){
        const data=JSON.parse(localStorage.getItem(key));
        return key;
    }
};


const saveLocalData=(key,value)=>{

    if(key && value){
         localStorage.setItem(key,JSON.stringify(value));
    }
}

export {getLocalData,saveLocalData};