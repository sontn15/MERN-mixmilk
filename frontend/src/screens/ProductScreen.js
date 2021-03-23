import React from 'react';
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
import products from '../products';

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

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
              <h6 className='text-info'>Giá: {product.price}đ</h6>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
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

      <h1 className='mb-3'>Thông tin sản phẩm</h1>
      <h6>Thành phần:</h6>
      <p>{product.description.thanhPhan}</p>
      <h6>Công dụng</h6>
      <p>{product.description.congDung}</p>

      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Thành phần</td>
            <td>{product.description.thanhPhan}</td>
          </tr>
          <tr>
            <td>Công dụng</td>
            <td>{product.description.congDung}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ProductScreen;
