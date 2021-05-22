import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {
  getOrderDetails,
  deliverOrder,
  payOrder,
} from '../actions/orderActions';
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from '../constants/orderConstants';

const OrderScreen = ({ match, history }) => {
  const orderId = match.params.id;

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!loading) {
    order.itemsPrice = order.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
  }

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }

    if (!order || successDeliver || order._id !== orderId || successPay) {
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, history, orderId, order, successDeliver, successPay, userInfo]);

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };
  const payHandler = () => {
    dispatch(payOrder(order));
  };

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
                      Đã gửi hàng vào:{' '}
                      {order.deliveredAt
                        .slice(0, 10)
                        .split('-')
                        .reverse()
                        .join('-')}
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
                      Đã thanh toán vào:{' '}
                      {order.paidAt.slice(0, 10).split('-').reverse().join('-')}
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
                              <Link to={`/product/${item.product}`}>
                                {item.name}
                              </Link>
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
                      <Col>Tạm tính</Col>
                      <Col>{order.itemsPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Tổng cộng</Col>
                      <Col className='text-danger'>
                        <strong>{order.totalPrice}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {loadingPay && <Loader />}
                  {userInfo && userInfo.isAdmin && !order.isPaid && (
                    <ListGroup.Item>
                      <Button
                        type='button'
                        className='btn btn-block'
                        onClick={payHandler}
                      >
                        Đánh dấu thanh toán
                      </Button>
                    </ListGroup.Item>
                  )}

                  {loadingDeliver && <Loader />}
                  {userInfo && userInfo.isAdmin && !order.isDelivered && (
                    <ListGroup.Item>
                      <Button
                        type='button'
                        className='btn btn-block'
                        onClick={deliverHandler}
                      >
                        Đánh dấu đã gửi hàng
                      </Button>
                    </ListGroup.Item>
                  )}
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
