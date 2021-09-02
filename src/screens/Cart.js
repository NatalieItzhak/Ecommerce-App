import React from "react";
import { useCart } from "react-use-cart";



export const Cart = () => {
  const {
    isEmpty,
    totalItems,
    totalUniqueItems,
    cartTotal,
    removeItem,
    emptyCart,
    updateItemQuantity,
    items,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart ({totalUniqueItems}) total items: ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td> <img src={item.image} style={{height: "6rem"}} /></td>
                    <td> {item.title} </td>
                    <td> {item.price} </td>
                    <td>Quantity ({item.quantity} )</td>
                    <td>
                      <button className="btn" onClick={()=>updateItemQuantity(item.id, item.quantity -1)}>-</button> <br></br>
                      <button className="btn" onClick={()=>updateItemQuantity(item.id, item.quantity +1)}>+</button> <br></br>
                      <button className="btn" onClick={()=> removeItem(item.id)}>Remove Item</button><br></br>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <h2>Total Price: $ {cartTotal}</h2>
        </div>
        <div>
          <button onClick={()=> emptyCart()}>Clear Cart</button>
    
          <button>Buy Now</button>
        </div>
      </div>
    </section>
  );
};
