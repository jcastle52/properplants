import { useContext } from "react";
import { PlantContext } from "./PlantContext";

export default function PlantList() {
  const { plants, cart, setCart,} = useContext(PlantContext);

  return (
    <>
      <ul className="PlantList">
        {plants.map((element) => (
          <li key={element.id} className="Item">
            <h3 className="Image">{element.image}</h3>
            <h3 className="Name">{element.name}</h3>
            <button className="AddToCart" onClick={() => setCart([...cart, element])}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </>
  );
}
