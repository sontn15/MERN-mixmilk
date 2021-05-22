import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Table, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listOrders } from '../actions/orderActions';

const OrderListScreen = ({ history }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  // get current user info logged in from state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push('/login');
    }
  }, [dispatch, history, userInfo]);

  const searchByPhone = (orders) => {
    return orders.filter((order) => order._id.indexOf(phoneNumber) > -1);
  };

  return (
    <Container>
      <h1>Danh sách đơn hàng</h1>

      <Form className='search-form my-3' style={{ width: '50%' }}>
        <Form.Control
          type='text'
          value={phoneNumber}
          // name='q'
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder='Tìm kiếm đơn hàng theo id'
        ></Form.Control>
      </Form>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>NGÀY TẠO</th>
              <th>TỔNG TIỀN</th>
              <th>THANH TOÁN</th>
              <th>VẬN CHUYỂN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {searchByPhone(orders).map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>
                  {order.createdAt
                    .substring(0, 10)
                    .split('-')
                    .reverse()
                    .join('-')}
                </td>
                <td>{order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10).split('-').reverse().join('-')
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt
                      .substring(0, 10)
                      .split('-')
                      .reverse()
                      .join('-')
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='light' className='btn-sm'>
                      Chi tiết
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default OrderListScreen;
