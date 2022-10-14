import { useEffect } from "react"
import styles from '../styles/Home.module.css'
import data from "../Data/db.json"
// import v4 as uuid from "uuid"

export default function Homepage() {

    console.log(data,"data")
    // const promptcall = () => {
      //  let name = prompt("please enter your name" , "veena")
  //  }

// useEffect(() => {
//     if(window ){
//         promptcall()
//     }
// },[])
    // sessionStorage.setItem("name", name);
    return (
      <div>
           {
             data?.data?.map((e)=> {
                return <div key="" className={styles.maindiv}>
                    <div className={styles.imgdiv} >
                      <img src={e?.item?.image} />
                      </div>
                </div>
                
             })  
           }
      </div>
    )
  }