import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import { USER_DETAILS_RESET } from '../constants/userConstants';

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  if (!cart.shippingAddress.address) {
    history.push('/shipping');
  } else if (!cart.paymentMethod) {
    history.push('/payment');
  }

  // caculate prices
  cart.itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  cart.totalPrice = Number(cart.itemsPrice);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: USER_DETAILS_RESET });
      dispatch({ type: ORDER_CREATE_RESET });
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        itemsPrice: cart.itemsPrice,
        paymentMethod: cart.paymentMethod,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <Container>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Thông tin thanh toán</h2>
              <p>
                <strong>Điện thoại: </strong>
                {cart.shippingAddress.phoneNumber}
              </p>
              <p>
                <strong>Địa chỉ: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.district},{' '}
                {cart.shippingAddress.city}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Phương thức thanh toán</h2>
              <p>
                <strong>Phương thức: </strong>
                {cart.paymentMethod}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Giỏ hàng</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Không có sản phẩm nào trong giỏ hàng của bạn</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
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
                          {item.qty} x {item.price}đ = {item.qty * item.price}đ
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
                <h2>Đơn hàng</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Sản phẩm</Col>
                  <Col>{cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tổng cộng</Col>
                  <Col className='text-danger'>
                    <strong>{cart.totalPrice}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Đặt hàng
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceOrderScreen;
