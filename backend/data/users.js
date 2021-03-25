import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Khanh Nguyen',
    email: 'khanh@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Duc Anh',
    email: 'anh@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
