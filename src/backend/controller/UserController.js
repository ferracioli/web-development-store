const User = require("../model/User");

class UserController {

  async store(req, res) {
    const data = await User.create(req.body);

    return res.json(data);
  }

  async index(req, res) {
    const data = await User.find({});
    return res.json(data);
  }

}

module.exports = new UserController();