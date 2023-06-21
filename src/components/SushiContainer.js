import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushiArray }) {
  // console.log(sushiArray)
  const displayedSushi = sushiArray.map(sushi => {
    return (
      <Sushi 
        key={sushi.id}
        name={sushi.name}
        image={sushi.img_url}
        created={sushi.create_at}
        price={sushi.price}
      />
    )
  })
  return (
    <div className="belt">
      {displayedSushi}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
