import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import blogs from './data/blogs.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import Blog from './models/blogModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // clear anything in database
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Blog.deleteMany();

    // array of created users
    const createdUser = await User.insertMany(users);

    // get id of admin user
    const adminUser = createdUser[0]._id;

    // add id admin user to every product
    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });

    // add id admin user to every blog
    const sampleBlogs = blogs.map((blog) => {
      return {
        ...blog,
        user: adminUser,
      };
    });

    await Product.insertMany(sampleProducts);
    await Blog.insertMany(sampleBlogs);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroytData = async () => {
  try {
    // clear anything in database
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Blog.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroytData();
} else {
  importData();
}
