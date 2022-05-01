const router = require('express').Router();
const { body } = require('express-validator');
const userController = require('../controller/user-controller');
const authMiddleware = require('../middleware/auth.middleware');
const apiData = require('../controller/api');

router.post(
  '/registration',
  body('email').isEmail().withMessage('Email is not valid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  userController.registration,
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
router.get('/city', apiData.home);
router.post('/price', apiData.price);



module.exports = router;
