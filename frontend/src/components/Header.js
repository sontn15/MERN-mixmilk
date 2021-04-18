import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg='primary' expand='lg' variant='dark' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Mixmilk</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/gioithieu'>
                <Nav.Link>Giới thiệu</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/blogs'>
                <Nav.Link>Blog Mixmilk</Nav.Link>
              </LinkContainer>
              {/* <NavDropdown title='Sản phẩm' id='basic-nav-dropdown'>
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
              </NavDropdown> */}
              <LinkContainer to='/chinhsach'>
                <Nav.Link>Chính sách</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/lienhe'>
                <Nav.Link>Liên hệ</Nav.Link>
              </LinkContainer>
            </Nav>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Giỏ hàng
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Đăng xuất
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Đăng nhập
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Người dùng</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Sản phẩm</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Đơn hàng</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/bloglist'>
                    <NavDropdown.Item>Blog</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
