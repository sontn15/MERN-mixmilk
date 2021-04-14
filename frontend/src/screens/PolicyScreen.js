import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const PolicyScreen = () => {
  return (
    <Container>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <h2>1. Chấp thuận các điều kiện sử dụng: </h2>
          <p>
            Khi sử dụng các dịch vụ trên Website của Mixmilk.vn, khách hàng đã
            mặc nhiên chấp thuận các điều khoản và điều kiện sử dụng được quy
            định dưới đây. Để biết được các sửa đổi mới nhất, Quý khách nên
            thường xuyên kiểm tra lại “Điều khoản Mixmilk.vn” có quyền thay đổi,
            điều chỉnh, thêm hay bớt các nội dung của “Điều khoản Mixmilk.vn”
            tại bất kỳ thời điểm nào. Nếu Quý khách vẫn tiếp tục sử dụng Website
            sau khi có các thay đổi như vậy thì có nghĩa là Quý khách đã chấp
            thuận các thay đổi đó.
          </p>
          <p className='text-center'>
            <img src='/images/chinh-sach.gif' alt='dieu kien su dung' />
          </p>
        </ListGroup.Item>
        <ListGroup.Item>
          <h2>2. Chính sách vận chuyển</h2>

          <p>
            <strong>2.1</strong> -Thanh toán tiền mặt trực tiếp tại Công ty:
          </p>
          <p>
            Quý khách hàng vui lòng thanh toán trực tiếp tại công ty ngay khi
            mua hàng: Địa chỉ: số 391 Nguyễn Xiển, Kim Giang, Thanh Xuân, Hà Nội
          </p>

          <p>
            <strong>2.2</strong> -Giao hàng và thanh toán bằng tiền mặt tại nhà:
          </p>
          <p>
            Quý khách thanh toán cho nhân viên giao nhận toàn bộ hoặc phần còn
            lại của giá trị đơn hàng đã mua (nếu đã đặt cọc)
          </p>
          <p>
            Nếu địa điểm giao hàng không nằm trong phạm vi được giao hàng miễn
            phí chúng tôi sẽ thu thêm chi phí vận chuyển (có thông báo trước với
            khách hàng)
          </p>

          <p>
            <strong>2.3</strong> -Thanh toán bằng chuyển khoản
          </p>
          <p>Khách hàng có thể chuyển khoản cho Mixmilk.vn theo thông tin:</p>
          <p>
            <strong>Techcombank</strong>: Chi nhánh Đông Đô
            <br />
            Công ty cổ phần đầu tư phát triển quốc tế Mixmilk
            <br />
            Số tài khoản: 19131959268868
          </p>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default PolicyScreen;
