import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

import Navbar from "../components/Navbar";
import Cart from "../components/Cart";

import { add_item } from "../store/ducks/cart";

export default function Home({ products }) {
  const dispatch = useDispatch();

  return (
    <>
      <header style={{ marginBottom: "100px" }}>
        <Navbar />
      </header>
      <Row>
        <Col xs="9" style={{ padding: "0px" }}>
          <div style={{ display: "inline-block" }} className="h-100">
            {products.map((res) => (
              <Card style={{ width: "30%", margin: "0 10px" }} key={res.id}>
                <CardImg
                  top={true}
                  style={{ height: 250 }}
                  src={`${res.images[0].url}`}
                />
                <CardBody>
                  <CardTitle>{res.title}</CardTitle>
                  <CardBody> R$ {res.unit_price.toFixed(2)}</CardBody>
                </CardBody>
                <div className="card-footer">
                  <Button
                    onClick={() => dispatch(add_item(res))}
                    outline
                    color="primary"
                  >
                    + Adicionar ao Carrinho
                  </Button>

                  <style jsx>
                    {`
                      a {
                        color: white;
                      }
                      a:link {
                        text-decoration: none;
                        color: white;
                      }
                      .container-fluid {
                        margin-bottom: 30px;
                      }
                      .btn-outline-primary {
                        color: #007bff !important;
                      }
                      a:hover {
                        color: white !important;
                      }
                    `}
                  </style>
                </div>
              </Card>
            ))}
          </div>
        </Col>
        <Col xs="3" style={{ padding: 0 }}>
          <div>
            <Cart />
          </div>
        </Col>
      </Row>
    </>
  );
}

export async function getServerSideProps() {
  const products = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`,
    { responseType: "json" }
  );

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: products.data,
    },
  };
}
