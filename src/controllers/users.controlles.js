const UserServices = require("../services/users.services")
const { sendWelcomeMail } = require("../utils/sendMails");
require("dotenv").config();

const createUser = async (req, res, next) => {
  try {
    const {username, email, password} = req.body;
    const hash = await UserServices.hashed(password)
    await UserServices.createNewUser({username, email, password:hash});
    res.status(201).send()
    const vt = await UserServices.verifyToken(username, email)
    console.log(vt)
    sendWelcomeMail(email, { username, vt });
  } catch (e) {
    next(e)
  }
}

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserServices.login(email)
    await UserServices.verifyUser(user, next);
    await UserServices.verifyEmail(user, next);
    await UserServices.validPassword(password, user, next)
    const { firstname, lastname, id, username, rolId } = user;
    const userData = { firstname, lastname, id, username, email, rolId };
    const token = await UserServices.token(userData)
    userData.token = token;
    res.json(userData);
  } catch (error) {
    next(error);
  }
};

const validateEmail = async (req, res, next) => {
  try {
    const { token } = req.body;
    const decoded = await UserServices.decoded(token, next)
    await UserServices.validEmail(decoded)
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) =>{
  
  try {
    const {id} = req.params;
    const {avatar} = req.file
    const {username} = req.body

    await UserServices.updateUserService({id, avatar, username});
    res.status(201).send();
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createUser,
  login,
  validateEmail,
  updateUser
};

// alguien esta editando
