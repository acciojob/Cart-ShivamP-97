import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialCart = [
    {
      id: 1,
      title: "Samsung Galaxy S7",
      price: 599.99,
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",
      amount: 1,
    },
    {
      id: 2,
      title: "google pixel ",
      price: 499.99,
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png",
      amount: 1,
    },
    {
      id: 3,
      title: "Xiaomi Redmi Note 2",
      price: 699.99,
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png",
      amount: 1,
    },
  ]


const calculateTotals = cart =>
  cart.reduce(
    (acc, item) => {
      acc.amount += item.amount;
      acc.total += item.amount * item.price;
      return acc;
    },
    { amount: 0, total: 0 }
  );

const reducer = (state, action) => {
  let newCart;

  switch (action.type) {
    case "INCREMENT":
      newCart = state.cart.map(item =>
        item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : item
      );
      return { ...state, cart: newCart, ...calculateTotals(newCart) };

    case "DECREMENT":
      newCart = state.cart.map(item =>
        item.id === action.payload
          ? { ...item, amount:  Math.max(0,item.amount - 1) }
          : item
      );
      return { ...state, cart: newCart, ...calculateTotals(newCart) };

    case "REMOVE_ITEM":
      newCart = state.cart.filter(item => item.id !== action.payload);
      return { ...state, cart: newCart, ...calculateTotals(newCart) };

    case "CLEAR_CART":
      return { cart: [], total: 0, amount: 0 };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    cart: initialCart,
    ...calculateTotals(initialCart),
  });

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const Navbar = () => {
  const { amount } = useContext(CartContext);

  return (
    <nav>
      <h3>useReducer</h3>
      🛒 Cart Items:{" "}
      <span id="nav-cart-item-count">{amount}</span>
    </nav>
  );
};

const CartItem = ({ id, title, price, amount }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="cart-item"  id={`cart-item-${id}`}>
      <h4>{title}</h4>

      <p id={`cart-item-price-${id}`}>₹{price}</p>

      <button
        id={`increment-btn-${id}`}
        onClick={() => dispatch({ type: "INCREMENT", payload: id })}
      >
        +
      </button>

      <span id={`cart-amount-${id}`}>{amount}</span>

      <button
        id={`decrement-btn-${id}`}
        onClick={() => dispatch({ type: "DECREMENT", payload: id })}
      >
        -
      </button>

      <button
        id={`cart-item-remove-${id}`}
        onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}
      >
        Remove
      </button>
    </div>
  );
};

const CartContainer = () => {
  const { cart, total, dispatch } = useContext(CartContext);

  if (cart.length === 0) {
    return <h3>Cart is currently empty</h3>;
  }

  return (
    <div>
      <div id="cart-items-list">
        {cart.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <h3 id="cart-total-amount">$ {total.toFixed(2)}</h3>

      <button
        id="clear-all-cart"
        onClick={() => dispatch({ type: "CLEAR_CART" })}
      >
        Clear Cart
      </button>
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <div id="main">
        <Navbar />
        <CartContainer />
      </div>
    </CartProvider>
  );
};

export default App;