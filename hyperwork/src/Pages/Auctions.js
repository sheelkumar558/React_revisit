import React, { useState } from 'react'
import AuctionCard from '../Components/AuctionCard';

const Auctions = () => {

  const [auctionlist, setAuctionlist] = useState([])

  return (
    <div>
      <h1>Auction List</h1>
      {auctionlist.map((item)=>{
        return(
          <>
          <AuctionCard item={item}/>
          </>
        );
      })}

    </div>
  )
}

export default Auctions