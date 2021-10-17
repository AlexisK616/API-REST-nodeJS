const express = require("express");
const User = require("../models/userModel");

const getUsers = async (req, res) => {
  const resDetail = await User.find();
  res.json({ data: resDetail });
};

const updateUser = async (req, res) => {
    try{
    const id = req.params.id;
    const resDetail = await User.findByIdAndUpdate(id,req.body)
    res.json({ data: resDetail });
    }catch(e){
       res.json(e);
   }
};

const getUserById = async (req, res) => {
   try{
    const id = req.params.id;
    const resDetail = await User.findById(id);
    res.json({ data: resDetail });
   }catch(e){
       res.json(e);
   }

};

const deleteUser = async (req, res) => {
    try{
        const id = req.params.id;
        const resDetail = await User.findByIdAndDelete(id);
        res.json({ data: resDetail });

    }catch(e){
        res.json(e);
    }
};

const addUser = async (req, res) => {
  const { email, password } = req.body;
  const resDetail = await User.create({ email, password });
  res.json({ data: resDetail });
};

module.exports = {
  addUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
};
