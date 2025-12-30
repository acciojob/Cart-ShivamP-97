
# Cart
The task is to create a react based application which uses the concept of `useContext` and `useReducer` for building a cart, Using the pre-defined cart items.

```
[
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
```
The cart should support following features.
- <b>Navbar</b> : The application should contain a Navbar having text "useReducer" and a cart logo indicating the number of cart elements.
- <b> Show the Item list</b> : The cart should render the item list as name of the item , it's price and the number of items / amount currently added to cart.  
- <b>Increase/decrease item</b> : The user should be able to increase or decrease the item count using button.
- <b>Clear cart</b> : The user must be able to clear the entire cart, thus users should be able to delete every items in the cart.
- <b>Remove Items</b> : The application user must have an button for removing the particular item from the cart.
- <b>Total amount</b> : The application should reflect the total amount of the entire items.

 
###  Instructions

- id for the top jsx in `app.js` should be <b>"main"</b>
- cart increment and decrement buttons should have id as <b>"increment-btn-`id`" </b>and <b>"decrement-btn-`id`"</b> where id reflects the id of the cart item.
- The cart items should be wrapped in a html tag with id=<b>"cart-items-list"</b>.if there is no element in the cart then this section should not be rendered i.e we should render something which says  "Cart is currently empty".
- clear cart button should have an id of <b>"clear-all-cart"</b>.
- The tag which wraps the total amount should have an id=<b>"cart-total-amount".</b>
- The price of each item should be wrapped in a tag with id=<b>"cart-item-price-`id`"</b>, where `id` is `id` of the item.
- The amount of each item should be wrapped in a tag with id=<b>"cart-amount-`id`"</b>.
- navbar should show the amount of items present having an id of <b>"nav-cart-item-count"</b>
