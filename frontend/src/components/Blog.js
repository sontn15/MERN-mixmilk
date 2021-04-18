import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Blog = ({ blog }) => {
  return (
    //   my-3 margin top bot, p-3 padding
    <Card className='border-info my-3 p-3 rounded '>
      <Link className='card-link' to={`/blog/${blog._id}`}>
        <Card.Img src={blog.image} variant='top' />
      </Link>

      <Card.Body>
        <div className='text-muted'>
          {blog.createdAt.slice(0, 10).split('-').reverse().join('/')}
        </div>

        <Link to={`/blog/${blog._id}`}>
          <Card.Title as='div'>
            <strong>{blog.title}</strong>
          </Card.Title>
        </Link>
        <Card.Text>{blog.subTitle}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Blog;
