import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container,
  Table,
  Button,
  Row,
  Col,
  Pagination,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listBlogs, deleteBlog, createBlog } from '../actions/blogActions';
import { BLOG_CREATE_RESET } from '../constants/blogConstants';

const BlogListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs, page, pages } = blogList;

  const blogDelete = useSelector((state) => state.blogDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = blogDelete;

  const blogCreate = useSelector((state) => state.blogCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    blog: createdBlog,
  } = blogCreate;

  // get current user info logged in from state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: BLOG_CREATE_RESET });
    if (!userInfo.isAdmin) {
      history.push('/login');
    }
    if (successCreate) {
      history.push(`/admin/blog/${createdBlog._id}/edit`);
    } else {
      dispatch(listBlogs(pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdBlog,
    pageNumber,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm('Bạn chắc chắn muốn xóa bài viết này?')) {
      dispatch(deleteBlog(id));
    }
  };

  const createBlogHandler = () => {
    dispatch(createBlog());
  };

  return (
    <Container>
      <Row className='align-items-center'>
        <Col>
          <h1>Blog</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createBlogHandler}>
            <i className='fas fa-plus'></i> Thêm bài viết
          </Button>
        </Col>
      </Row>

      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>TIÊU ĐỀ</th>
                <th>SUBTITLE</th>
                <th>NGÀY TẠO</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id}>
                  <td>{blog._id}</td>
                  <td>{blog.title}</td>
                  <td>{blog.subTitle}</td>
                  <td>
                    {blog.createdAt.slice(0, 10).split('-').reverse().join('/')}
                  </td>

                  <td>
                    <LinkContainer to={`/admin/blog/${blog._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(blog._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {pages > 1 && (
            <Pagination>
              {[...Array(pages).keys()].map((x) => (
                <LinkContainer key={x + 1} to={`/admin/bloglist/${x + 1}`}>
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

export default BlogListScreen;
