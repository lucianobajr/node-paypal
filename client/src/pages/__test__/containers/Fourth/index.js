import React from "react";

import { Section, InfoRow, InfoColumn, Title, ProductsContent } from "./styles";

import { ContainerTwo } from "../../../../styles/global";

import { products } from "../../../../data/products.json";
import Products from "../../../../components/Products";

function Third() {
  return (
    <Section>
      <ContainerTwo>
        <InfoRow>
          <InfoColumn>
            <Title>Some of our Services</Title>
            <ProductsContent>
              {products.map((product) => (
                <Products
                  img={product.img}
                  title={product.titulo}
                  description={product.descricao}
                  value={product.preco}
                  id={product.id}
                  key={product.id}
                />
              ))}
            </ProductsContent>
          </InfoColumn>
        </InfoRow>
      </ContainerTwo>
    </Section>
  );
}

export default Third;
