

const express = require('express');
const router = express.Router();
const {handleSignUp, handleLogin, allUsers} = require('../controllers/users');


router.post('/signup', handleSignUp);
router.post('/login', handleLogin);


router.get('/', allUsers);


module.exports = router;