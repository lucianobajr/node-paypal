import React, { useState } from "react";

import { Container } from "./styles";

import api from "../../services/api";

function Products({ img, title, description, value, id }) {
  const [click, setClick] = useState(false);
  async function handlePay() {
    try {
      setClick(true);
      const link = await api.post(`buy?id=${id}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_PAYPAL}`,
        },
      });

      window.open(`${link.data.link}`, "_self");
    } catch (error) {
      console.log("erro!");
    } finally {
      setClick(false);
    }
  }
  return (
    <Container>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>$ {value}</p>
      <button onClick={() => handlePay()}>
        {click ? "Catching..." : "Get"}
      </button>
    </Container>
  );
}

export default Products;
