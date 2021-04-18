import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutScreen from './screens/AboutScreen';
import PolicyScreen from './screens/PolicyScreen';
import ContactScreen from './screens/ContactScreen';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import BlogScreen from './screens/BlogScreen';
import BlogDetailScreen from './screens/BlogDetailScreen';
import BlogListScreen from './screens/BlogListScreen';
import BlogEditScreen from './screens/BlogEditScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Route path='/order/:id' component={OrderScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/placeorder' component={PlaceOrderScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/admin/userlist' component={UserListScreen} />
        <Route path='/admin/user/:id/edit' component={UserEditScreen} />
        <Route path='/admin/productlist' component={ProductListScreen} exact />
        <Route
          path='/admin/productlist/:pageNumber'
          component={ProductListScreen}
          exact
        />
        <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
        <Route path='/admin/orderlist' component={OrderListScreen} />
        <Route path='/admin/bloglist' component={BlogListScreen} exact />
        <Route
          path='/admin/bloglist/:pageNumber'
          component={BlogListScreen}
          exact
        />
        <Route path='/admin/blog/:id/edit' component={BlogEditScreen} />
        <Route path='/search/:keyword' component={HomeScreen} exact />
        <Route path='/page/:pageNumber' component={HomeScreen} exact />
        <Route
          path='/search/:keyword/page/:pageNumber'
          component={HomeScreen}
          exact
        />
        <Route path='/' component={HomeScreen} exact />
        <Route path='/blogs' component={BlogScreen} exact />
        <Route path='/blogs/:pageNumber' component={BlogScreen} exact />
        <Route path='/blog/:id' component={BlogDetailScreen} />
        <Route path='/gioithieu' component={AboutScreen} />
        <Route path='/chinhsach' component={PolicyScreen} />
        <Route path='/lienhe' component={ContactScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
