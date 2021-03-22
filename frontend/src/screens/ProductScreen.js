import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const ProductScreen = () => {
  return (
    <>
      <h1>Sản phẩm mới nhất</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductScreen;
