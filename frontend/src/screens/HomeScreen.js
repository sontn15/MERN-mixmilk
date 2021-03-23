import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from '../components/Slider';
import Certificate from '../components/Certificate';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
      <Slider />
      <Container className='pt-'>
        <h1>Sản phẩm của chúng tôi</h1>
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
      <Certificate />
    </>
  );
};

export default HomeScreen;
