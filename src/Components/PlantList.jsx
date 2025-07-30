export default function PlantList({ plantArr, cart, setCart }) {
  return (
    <>
      <ul className="PlantList">
        {plantArr.map((element) => (
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
