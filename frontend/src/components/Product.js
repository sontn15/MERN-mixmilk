import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    //   my-3 margin top bot, p-3 padding
    <Card className='border-primary my-3 p-3 rounded '>
      <a className='card-link' href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>

      <Card.Body>
        <Card.Link href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Card.Link>

        <Card.Text as='h6'>{product.price}đ</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
