import path from 'path';
import express from 'express';
import ProductsController from './src/controllers/product.controller.js';
import UserController from './src/controllers/user.controller.js';
import validationMiddleware from './src/middlewares/validation.middleware.js';
import {uploadFile} from './src/middlewares/file-upload.middleware.js';
import session from 'express-session';
import {auth} from './src/middlewares/auth.middleware.js';
import cookieParser from 'cookie-parser';
import {setLastVisit} from './src/middlewares/lastVisit.middleware.js'

const server = express();

server.use(express.static('public/resume'));
server.use(cookieParser());
server.use(setLastVisit);
server.use(session({
  secret:'SecretKey',
  resave: false,
  saveUninitialized: true,
  cookie:{secure:false},
}));

const productController =
  new ProductsController();
const usersController = new UserController();

// server.use(ejsLayouts);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.set("view engine", 'ejs');
server.set("views",path.join(path.resolve(),'src','views'));

server.use(express.static(path.join(path.resolve(), 'src', 'views', 'partials'),{ maxAge: 0 }));
//routes
server.get('/', productController.getHome);
// server.get('/', productController.getRegister);
server.get('/login',usersController.getLogin);
server.post('/register', usersController.postRegister);
server.post('/login', usersController.postLogin);
server.get('/logout',usersController.logout);
server.post('/submitForm', productController.addProduct);
server.post('/getjob',uploadFile.single('resume'), productController.applyForJob);
server.get('/viewApplicants', usersController.getApplicantData);
server.get('/viewJobPosted',productController.getPostJob);
server.get('/update-product/:id',
productController.getUpdateProductView
);

server.get(
'/delete-product/:id',
productController.deleteProduct
);
server.post('/update-product',productController.postUpdateProduct)
server.post('/delete-product/:id', productController.deleteProduct);

server.get('/getjob', productController.getProduct);
server.get('/getjobDesc/:productId', productController.getProductDesc);

export default server;
