import Link from "next/link"
import data from "../Data/db.json"
import styles from '../styles/Home.module.css'

export default function auction() {
    console.log(data.data)
    return (
      <div>
       {
            data?.data?.map((e)=> {
                 return <div key="" className={styles.auctionbox}>
                     <Link href={`/auction/${e?.auction?.auction_id}`}><p>auction_id = {e?.auction?.auction_id}</p></Link>
                     <p>unit_price = {e?.auction?.unit_price}</p>
                     <p>created_at = {e?.auction?.created_at}</p>
                     <p>quantity = {e?.auction?.quantity}</p>
                </div>
                
             })  
           }
      </div>
    )
  }

