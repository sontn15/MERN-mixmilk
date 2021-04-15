import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Blog from '../components/Blog';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listBlogs } from '../actions/blogActions';

const BlogScreen = () => {
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, blogs, error } = blogList;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

  return (
    <Container>
      <Link className='btn btn-primary my-3' to='/'>
        Trở về
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {blogs.map((blog) => (
            <Col key={blog._id} sm={12} md={6} lg={4} xl={3}>
              <Blog blog={blog} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default BlogScreen;
