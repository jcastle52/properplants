export default function Cart({ cart, plants, setCart }) {

  const RemoveItem = (item) => {
    const cartCopy = [...cart];
    const itemIndex = cartCopy.indexOf(item);
    cartCopy.splice(itemIndex, 1);
    setCart(cartCopy);
  };

  const CartItem = (cartElement) => {
    let quanity = 0;
    cart.map((checkElement) => {
      if (cartElement.id === checkElement.id) {
        quanity++;
      }
    });
    if (quanity === 0) {
      return;
    }

    return (
      <li key={cartElement.id}>
        <h3 className="CartItem">
          {cartElement.image} {cartElement.name}
        </h3>
        <div className="Quantity">
          <button
            className="CartButton"
            onClick={() => {
              RemoveItem(cartElement);
            }}
          >-</button>
          <h3 className="QuantityVal">{quanity}</h3>
          <button className="CartButton" 
          onClick={() => setCart([...cart, cartElement])}>+</button>
        </div>
      </li>
    );
  };

  return (
    <>
      <ul className="CartList">
        {plants.map((cartElement) => CartItem(cartElement))}
      </ul>
    </>
  );
}
