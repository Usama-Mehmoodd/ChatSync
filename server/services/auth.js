
const jwt = require('jsonwebtoken');

const SECRET_KEY = '!112233@#';

const generateToken = (user) => {

    const token = jwt.sign({
        id : user._id,
        email : user.email,
    }, SECRET_KEY );

    console.log('new token generated : ' + token);

    return token ;
}



module.exports = {
    generateToken
}