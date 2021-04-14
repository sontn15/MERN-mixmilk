import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const ContactScreen = () => {
  return (
    <Container>
      <ListGroup variant='flush'>
        <ListGroup.Item variant='info'>
          <p>
            <strong>Địa chỉ công ty</strong>: Số 391 Nguyễn Xiển, Kim Giang,
            Thanh Xuân, Hà Nội
          </p>
        </ListGroup.Item>
        <ListGroup.Item variant='info'>
          <p>
            <strong>Email</strong>: mixmilk.vn@gmail.com
          </p>
        </ListGroup.Item>
        <ListGroup.Item variant='info'>
          <p>
            <strong>Điện thoại</strong>:
            <br />
            Tel: 024 777 888 68
            <br />
            Hotline: 09 8383 6969
          </p>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default ContactScreen;
