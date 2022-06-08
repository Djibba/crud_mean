const express = require('express');
const router = express.Router();

const { getAllUsers, createUser, getSingleUser, updateUser, deleteUser } = require('../controllers/userController');

router.route('/users').get(getAllUsers).post(createUser);
router.route('/user/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
