const express = require("express");
const User = require("../models/userModel");


const getUsers =  () => {

}

const updateUser = () => {

}

const getUserById = () => {

}

const deleteUser = () => {

}

const addUser = async (body) => {
  let user = new User({
    email: body.email,
    password: body.password,
  });
  return await user.save();
};



module.exports = {
    addUser,
    getUserById,
    getUsers,
    updateUser,
    deleteUser
}
