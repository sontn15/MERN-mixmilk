import React, { useEffect } from 'react';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Image } from 'react-bootstrap';
import { listBlogDetails } from '../actions/blogActions';

const BlogDetailScreen = ({ match }) => {
  const dispatch = useDispatch();

  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, blog } = blogDetails;

  useEffect(() => {
    dispatch(listBlogDetails(match.params.id));
  }, [dispatch, match]);
  return (
    <Container>
      <Link className='btn btn-primary my-3' to='/blogs'>
        Trở về
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <h2>{blog.title}</h2>
          <p>{blog.subTitle}</p>
          <p>
            <Image src={blog.image} alt='how to carry 1 vs 9 aphelios' />
          </p>
          <p>{blog.body}</p>
        </>
      )}
    </Container>
  );
};

export default BlogDetailScreen;
