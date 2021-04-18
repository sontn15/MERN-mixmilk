import React, { useEffect } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Blog from '../components/Blog';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listBlogs } from '../actions/blogActions';

const BlogScreen = ({ match }) => {
  const dispatch = useDispatch();

  const pageNumber = match.params.pageNumber || 1;

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs, pages, page } = blogList;

  useEffect(() => {
    dispatch(listBlogs(pageNumber));
  }, [dispatch, pageNumber]);

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
        <>
          <Row>
            {blogs.map((blog) => (
              <Col key={blog._id} sm={12} md={6} lg={4} xl={3}>
                <Blog blog={blog} />
              </Col>
            ))}
          </Row>
          {pages > 1 && (
            <Pagination>
              {[...Array(pages).keys()].map((x) => (
                <LinkContainer key={x + 1} to={`/blogs/${x + 1}`}>
                  <Pagination.Item active={x + 1 === page}>
                    {x + 1}
                  </Pagination.Item>
                </LinkContainer>
              ))}
            </Pagination>
          )}
        </>
      )}
    </Container>
  );
};

export default BlogScreen;
