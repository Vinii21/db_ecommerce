const Users = require("../models/users.model");

const createUser = async (newUser) => {
    const user = await Users.create(newUser);
    return user;
}

const loginUser = async (email) => {
    const user = await Users.findOne({
        where: {email}
    });
    return user;
}

const validateEmail = async (decoded) => {
    const user = await Users.update(
        { validUser: true },
        {
          where: { email: decoded.email },
        }
      );
      return user;
}

const updateUser = async (filename, username, id) =>{
  
    const user = await Users.update({
        username:username,
        avatar: filename
     },{
       where: {id}
     })
    return user;
}

module.exports = {
    createUser,
    loginUser,
    validateEmail,
    updateUser
}