import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { useDispatch, useSelector } from "react-redux";
import { add_item, remove_item } from "../../store/ducks/cart";
import Link from "next/link";

function Cart() {
  const router = useRouter();

  const cart  = useSelector(state => state.cart);
  
  const dispacth = useDispatch();

  const [ session, loading ] = useSession();

  console.log(cart);

  return (
    <div>
      <div style={{ padding: "10px 5px" }} className="cart">
        <div style={{ margin: 10 }}>Your Order:</div>
        <hr />
        <div style={{ padding: 10 }}>
          <div style={{ marginBottom: 6 }}>
            <small>Items:</small>
          </div>
          <div>
            {cart.items
              ? cart.items.map((item) => {
                  if (item.quantity > 0) {
                    return (
                      <div
                        className="items-one"
                        style={{ marginBottom: 15 }}
                        key={item.id}
                      >
                        <div>
                          <span id="item-price">&nbsp; ${item.price}</span>
                          <span id="item-name">&nbsp; {item.title}</span>
                        </div>
                        <div>
                          <button
                            style={{
                              height: 25,
                              padding: 0,
                              width: 15,
                              marginRight: 5,
                              marginLeft: 10,
                            }}
                            onClick={() => dispatch(add_item(item))}
                            color="link"
                          >
                            +
                          </button>
                          <button
                            style={{
                              height: 25,
                              padding: 0,
                              width: 15,
                              marginRight: 10,
                            }}
                            onClick={() => dispatch(remove_item(item))}
                            color="link"
                          >
                            -
                          </button>
                          <span style={{ marginLeft: 5 }} id="item-quantity">
                            {item.quantity}x
                          </span>
                        </div>
                      </div>
                    );
                  }
                })
              : null}
            {session ? (
              cart.items.length > 0 ? (
                <div>
                  <div style={{ width: 200, padding: 10 }} color="light">
                    <h5 style={{ fontWeight: 100, color: "gray" }}>Total:</h5>
                    <h3>${cart.total.toFixed(2)}</h3>
                  </div>
                  
                </div>
              ) : (
                <>
                  {router.pathname === "payment/checkout" && (
                    <small
                      style={{ color: "blue" }}
                      onClick={() => window.history.back()}
                    >
                      Ainda não existem produtos adicionados ao seu carrinho
                    </small>
                  )}
                </>
              )
            ) : (
              <Link passHref="/auth/sign">
                <a> Fazer login </a>
              </Link>
            )}
          </div>
          {console.log(router.pathname)}
        </div>
      </div>
      <style jsx>{`
        #item-price {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
        #item-quantity {
          font-size: 0.95em;
          padding-bottom: 4px;
          color: rgba(158, 158, 158, 1);
        }
        #item-name {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
      `}</style>
    </div>
  );
}
export default Cart;