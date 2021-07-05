import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { Button, Card, CardBody, CardTitle, Badge } from "reactstrap";

import { add_item, remove_item } from "../../store/ducks/cart";

function Cart() {
  const [session, loading] = useSession();
  const router = useRouter();

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div>
      <Card style={{ padding: "10px 5px" }} className="cart">
        <CardTitle style={{ margin: "10px" }}>Your Order:</CardTitle>
        <hr />
        <CardBody style={{ padding: "10px" }}>
          <div style={{ marginBottom: "6px" }}>
            <small>Items:</small>
          </div>
          <div>
            {cart.items
              ? cart.items.map((item) => {
                  if (item.quantity > 0) {
                    return (
                      <div
                        className="items-one"
                        style={{ marginBottom: "15px" }}
                        key={item.id}
                      >
                        <div>
                          <span id="item-price">&nbsp; ${item.price}</span>
                          <span id="item-name">&nbsp; {item.title}</span>
                        </div>
                        <div>
                          <Button
                            style={{
                              height: "25px",
                              padding: "0px",
                              width: "15px",
                              marginRight: " 5px",
                              marginLeft: "10px",
                            }}
                            onClick={() => dispatch(add_item(item))}
                            color="link"
                          >
                            +
                          </Button>
                          <Button
                            style={{
                              height: "25px",
                              padding: "0px",
                              width: "15px",
                              marginRight: "10px",
                            }}
                            onClick={() => dispatch(remove_item(item))}
                            color="link"
                          >
                            -
                          </Button>
                          <span
                            style={{ marginLeft: "5px" }}
                            id="item-quantity"
                          >
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
                  <Badge
                    style={{ width: "200px", padding: "10px" }}
                    color="light"
                  >
                    <h5 style={{ fontWeight: "100", color: "gray" }}>Total:</h5>
                    <h3>R${cart.total}</h3>
                  </Badge>
                  {router.pathname != "/payment/checkout" ? (
                    <div
                      style={{
                        marginTop: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <Link href="/payment/checkout">
                        <Button style={{ width: "100%" }} color="primary">
                          <a>Finalizar Compra</a>
                        </Button>
                      </Link>
                    </div>
                  ) : null}
                </div>
              ) : null
            ) : (
              <h5>Login to Order</h5>
            )}
          </div>
        </CardBody>
      </Card>
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
