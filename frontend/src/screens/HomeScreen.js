import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from '../components/Slider';
import Certificate from '../components/Certificate';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Slider />
      <Container className='pt-'>
        <h1>Sản phẩm của chúng tôi</h1>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
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
