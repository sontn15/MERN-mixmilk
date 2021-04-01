import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getOrderDetails } from '../actions/orderActions';

const OrderScreen = ({ match }) => {
  const orderId = match.params.id;

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  if (!loading) {
    order.itemsPrice = order.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
  }

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <h1>Đơn hàng: {order._id}</h1>
          <Row>
            <Col md={8}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>Thông tin thanh toán</h2>
                  <p>
                    <strong>Name: </strong>
                    {order.user.name}
                  </p>
                  <p>
                    <strong>Email: </strong>
                    <a href={`mailto${order.user.email}`}>{order.user.email}</a>
                  </p>
                  <p>
                    <strong>Điện thoại: </strong>
                    {order.shippingAddress.phoneNumber}
                  </p>
                  <p>
                    <strong>Địa chỉ: </strong>
                    {order.shippingAddress.address},{' '}
                    {order.shippingAddress.district},{' '}
                    {order.shippingAddress.city}
                  </p>
                  {order.isDelivered ? (
                    <Message variant='success'>
                      Đã nhận hàng vào: {order.deliveredAt}
                    </Message>
                  ) : (
                    <Message variant='danger'>Chưa nhận hàng</Message>
                  )}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h2>Phương thức thanh toán</h2>
                  <p>
                    <strong>Phương thức: </strong>
                    {order.paymentMethod}
                  </p>
                  {order.isPaid ? (
                    <Message variant='success'>
                      Đã thanh toán vào: {order.paidAt}
                    </Message>
                  ) : (
                    <Message variant='danger'>Chưa thanh toán</Message>
                  )}
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>Giỏ hàng</h2>
                  {order.orderItems.length === 0 ? (
                    <Message>
                      Không có sản phẩm nào trong đơn hàng của bạn
                    </Message>
                  ) : (
                    <ListGroup variant='flush'>
                      {order.orderItems.map((item, index) => (
                        <ListGroup.Item key={index}>
                          <Row>
                            <Col md={1}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                fluid
                                rounded
                              />
                            </Col>
                            <Col>
                              <Link to={`/product/$product`}>{item.name}</Link>
                            </Col>
                            <Col md={4}>
                              {item.qty} x {item.price}đ ={' '}
                              {item.qty * item.price}đ
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h2>Đơn giá</h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Items</Col>
                      <Col>{order.itemsPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Total</Col>
                      <Col className='text-danger'>
                        <strong>{order.totalPrice}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default OrderScreen;
