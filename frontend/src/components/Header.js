import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' expand='lg' variant='dark' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Mixmilk</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/gioithieu'>Giới thiệu</Nav.Link>

              <NavDropdown title='Sản phẩm' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>
                  Mixmilk chocolate
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>SCoffee</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Mixmilk dâu
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Mixmilk vani
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/product'>Chính sách</Nav.Link>
              <Nav.Link href='/product'>Liên hệ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart'></i> Giỏ hàng
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user'></i> Đăng nhập
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
