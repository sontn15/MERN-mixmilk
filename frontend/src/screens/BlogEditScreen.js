import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { listBlogDetails, updateBlog } from '../actions/blogActions';
import { BLOG_UPDATE_RESET } from '../constants/blogConstants';

const BlogEditScreen = ({ match, history }) => {
  const blogId = match.params.id;

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, blog } = blogDetails;

  const blogUpdate = useSelector((state) => state.blogUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = blogUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: BLOG_UPDATE_RESET });
      history.push('/admin/blogList');
    } else {
      if (!blog.title || blog._id !== blogId) {
        dispatch(listBlogDetails(blogId));
      } else {
        setTitle(blog.title);
        setSubtitle(blog.subTitle);
        setImage(blog.image);
        setBody(blog.body);
      }
    }
  }, [dispatch, history, blog, blogId, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post('/api/upload', formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateBlog({
        _id: blogId,
        title,
        subtitle,
        image,
        body,
      })
    );
  };

  return (
    <Container>
      <Link to='/admin/bloglist' className='btn btn-warning my-3'>
        Tr??? v???
      </Link>
      <FormContainer>
        <h1>C???p nh???t b??i vi???t</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='title'>
              <Form.Label>Ti??u ?????</Form.Label>
              <Form.Control
                type='text'
                placeholder='Nh???p ti??u ?????'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='subtitle'>
              <Form.Label>Subtitle</Form.Label>
              <Form.Control
                type='text'
                placeholder='Nh???p subtile'
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>H??nh ???nh</Form.Label>
              <Form.Control
                type='text'
                placeholder='Nh???p url h??nh ???nh s???n ph???m'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Ch???n h??nh ???nh'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='body'>
              <Form.Label>B??i vi???t</Form.Label>
              <Form.Control
                as='textarea'
                type='textarea'
                placeholder='B??i vi???t'
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              C???p nh???t
            </Button>
          </Form>
        )}
      </FormContainer>
    </Container>
  );
};

export default BlogEditScreen;
