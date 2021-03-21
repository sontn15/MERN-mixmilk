import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100 '
            src='/images/slide1.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>Chỉ 6k mỗi ngày để luôn khỏe mạnh</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/images/slide2.jpg'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>Giúp tăng phát triển chiều cao cho bé</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/images/slide3.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Bổ sung Canxi hữu cơ xóa đi nỗi đau xương khớp</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
