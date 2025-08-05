const express = require('express');
const router = express.Router();
const { getUsers, createUser,getUserByEmail } = require('../controllers/userController');

router.get('/get', getUsers);
router.post('/create', createUser);
router.get('/email/:email',getUserByEmail);
module.exports = router;
