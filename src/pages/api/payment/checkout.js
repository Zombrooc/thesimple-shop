import axios from "axios";
import pagarme from "pagarme";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, cpf, amount, email, external_id, products } = req.body;

    const items = await products.map(product => {
      return {
        title: product.title,
        unit_price: product.unit_price * 100,
        tangible: product.tangible,
        quantity: product.quantity,
        id: product._id
      }
    });


    pagarme.client
      .connect({ api_key: process.env.PAGARME_API })
      .then((client) =>
        client.transactions.create({
          amount: amount*100,
          payment_method: "boleto",
          customer: {
            external_id,
            type: "individual",
            country: "br",
            name,
            email,
            documents: [
              {
                type: "cpf",
                number: cpf,
              },
            ],
          },
          items,
          // billing: {
          //   name,
          //   address: {
          //     street: "Rua Matrix",
          //     complementary: "Empty",
          //     street_number: "9999",
          //     neighborhood: "Rio Cotia",
          //     city: "Cotia",
          //     state: "sp",
          //     zipcode: "06714360",
          //     country: "br",
          //   }
          // },
        })
      )
      .then((transaction) => res.status(200).json(transaction))
      .catch((error) => console.log(error.response));
  } else {
    res.json({ somethingWrong: true });
  }
};
