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

  async put(req, res) {
    var query = {'username': req.user.username};
    req.newData.username = req.user.username;

    User.findOneAndUpdate(query, req.newData, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
  }

}

module.exports = new UserController();