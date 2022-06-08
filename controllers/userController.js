const mongoose = require('mongoose');


const user = require('../models/userModel');

const getAllUsers = (req, res, next) => {
    res.send('test');
};

const createUser = async (req, res, next) => {
    try {

        const user = await user.creaate(req.body);
        res.status(201).json(user);

    } catch (error) {
        res.status(500).json({message: error});
    }
};

const getSingleUser = (req, res, next) => {

};

const updateUser = (req, res, next) => {

};

const deleteUser = (req, res, next) => {

};

module.exports = {
    getAllUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser
}
