import React, { useState, useEffect } from 'react';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Table,
} from 'react-bootstrap';
import axios from 'axios';

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data);
    };

    fetchProduct();
  }, [match]);

  return (
    <Container>
      <Link className='btn btn-primary my-3' to='/'>
        Trở về
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <h6 className='text-info'>Giá: {product.price}đ</h6>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Giá: </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tình trạng:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'Còn hàng' : 'Tạm hết hàng'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Thêm vào giỏ
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* <h1 className='mb-3'>Thông tin sản phẩm</h1>
      <h6>Thành phần:</h6>
      <p>{product.description}</p>
      <h6>Công dụng</h6>
      <p>{product.description}</p>

      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Thành phần</td>
            <td>{product.description}</td>
          </tr>
          <tr>
            <td>Công dụng</td>
            <td>{product.description}</td>
          </tr>
        </tbody>
      </Table> */}
    </Container>
  );
};

export default ProductScreen;
