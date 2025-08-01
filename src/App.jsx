import PlantList from "./Components/plantList";
import Cart from "./Components/Cart";

export default function App() {

  return (
    <>
      <h1>Proper Plants</h1>
      <div className="Sections">
        <div className="Plants">
          <h2 className="Title">Plants</h2>
          <PlantList/>
        </div>
        <div className="Cart">
          <h2 className="Title">Cart</h2>
            <Cart/>
        </div>
      </div>
    </>
  );
}
