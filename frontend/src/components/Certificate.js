import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Certificate = () => {
  return (
    <Container className='certificate'>
      <h1>Chứng nhận sản xuất sản phẩm</h1>
      <Row className='content'>
        <Col className='col-sm-4'>
          <Card className='border-info'>
            <Card.Img src='./images/mixmilk1.jpg' variant='top' />
            <Card.Body>
              <Card.Title>Chứng nhận GMP</Card.Title>
              <Card.Text>
                GMP (Good Manufacturing Practices ) là tiêu chuẩn thực hành sản
                xuất tốt nhằm đảm bảo điều kiện vệ sinh an toàn cho sản xuất.
                ... GMP là một phần cơ bản trong hệ thống quản lý an toàn thực
                phẩm
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='col-sm-4'>
          <Card className='border-info'>
            <Card.Img src='./images/mixmilk1.jpg' variant='top' />
            <Card.Body>
              <Card.Title>Chứng nhận GMP</Card.Title>
              <Card.Text>
                GMP (Good Manufacturing Practices ) là tiêu chuẩn thực hành sản
                xuất tốt nhằm đảm bảo điều kiện vệ sinh an toàn cho sản xuất.
                ... GMP là một phần cơ bản trong hệ thống quản lý an toàn thực
                phẩm
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='col-sm-4'>
          <Card className='border-info'>
            <Card.Img src='./images/mixmilk1.jpg' variant='top' />
            <Card.Body>
              <Card.Title>Chứng nhận GMP</Card.Title>
              <Card.Text>
                GMP (Good Manufacturing Practices ) là tiêu chuẩn thực hành sản
                xuất tốt nhằm đảm bảo điều kiện vệ sinh an toàn cho sản xuất.
                ... GMP là một phần cơ bản trong hệ thống quản lý an toàn thực
                phẩm
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Certificate;
