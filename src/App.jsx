import PLANTS from "./data";
import PlantList from "./Components/plantList";
import Cart from "./Components/Cart";
import { useState } from "react";

export default function App() {
const [cart, setCart] = useState([]);

  return (
    <>
      <h1>Proper Plants</h1>
      <div className="Sections">
        <div className="Plants">
          <h2 className="Title">Plants</h2>
          <PlantList plantArr={PLANTS} cart={cart} setCart={setCart}/>
        </div>
        <div className="Cart">
          <h2 className="Title">Cart</h2>
            <Cart cart={cart} plants={PLANTS} setCart={setCart}/>
        </div>
      </div>
    </>
  );
}
