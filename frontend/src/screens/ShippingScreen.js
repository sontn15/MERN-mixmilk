import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShippingAddress } from '../actions/cartActions';

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress.address);
  const [phoneNumber, setPhoneNumber] = useState(shippingAddress.phoneNumber);
  const [city, setCity] = useState(shippingAddress.city);
  const [district, setDistrict] = useState(shippingAddress.district);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, phoneNumber, city, district }));
    history.push('/payment');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Thông tin thanh toán</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control
            type='text'
            placeholder='Nhập địa chỉ'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='phoneNumber'>
          <Form.Label>Điện thoại</Form.Label>
          <Form.Control
            type='text'
            placeholder='Nhập số điện thoại'
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>Tỉnh, Thành phố</Form.Label>
          <Form.Control
            type='text'
            placeholder='Nhập tỉnh, thành phố'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='district'>
          <Form.Label>Tỉnh, Thành phố</Form.Label>
          <Form.Control
            type='text'
            placeholder='Nhập quận, huyện'
            value={district}
            required
            onChange={(e) => setDistrict(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Tiếp tục
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
