const express =  require('express');
const router =  express.Router();
const {getUserById,getUsers,addUser,deleteUser,updateUser} = require('../controllers/userController');

router.get('/',getUsers);
router.get('/:id',getUserById);
router.post('/',addUser);
router.delete('/:id',deleteUser);
router.put('/:id',updateUser);


module.exports = router;