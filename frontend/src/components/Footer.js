import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='bg-primary' variant='dark'>
      <Container>
        <Row className='py-3 text-white'>
          <Col>
            <h5>CÔNG TY CP ĐẦU TƯ PHÁT TRIỂN QUỐC TẾ MIXMILK</h5>
            <p>Số 391 Nguyễn Xiển, Kim Giang, Thanh Xuân, Hà Nội</p>
            <p>
              <i className='fas fa-phone-alt'></i> 1900.9999
            </p>
            <p>
              <i className='far fa-envelope'></i> mixmilk@gmail.com
            </p>
          </Col>
          {/* <Col className='text-center py-3'>Copyright &copy; HoangPham</Col> */}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
