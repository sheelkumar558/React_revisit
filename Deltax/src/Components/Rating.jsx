import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { GetSong, Rating } from "../Redux/songs/songAction";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};



function StarRating({id}) {

  const dispatch = useDispatch();
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [count,setCount] = useState(0);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
    setCount(value);
    const payload={
      rating:Number (value) 
    }

    dispatch(Rating(id,payload)).then((e)=>dispatch(GetSong()))
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  
  useEffect(() => {
   
  }, [currentValue,count]);
  
  return (
    <div style={styles.container}>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>  
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  }

};




export default StarRating;