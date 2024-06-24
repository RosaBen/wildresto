/* eslint-disable no-unused-vars */
import { useState } from "react";
function MenuItem({ item }) {
  //   console.log(item);
  //create a state isFavorite that has the inital value of isFavorite that comes from the props
  const [isFavorite, setIsFavorite] = useState(item.isFavorite);
  console.log(isFavorite);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        {/* the image will receive the url src from the props */}
        <img src={item.foodImage} alt={item.description} />
        <figcaption>
          {/* the h2 will receive the item name from the props */}
          <h2>{item.itemName}</h2>
          {/* the p will receive the item description from the props */}
          <p>{item.description} </p>
        </figcaption>
      </figure>
      {/* the span will receive the item price from the props */}
      <span>{item.price} EUR</span>

      {/* the button to play with the isFavorite state:
                - onClick, will toggle the isFavorite state,
                - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
            */}
      <button>{item.isFavorite}</button>
    </section>
  );
}

export default MenuItem;
