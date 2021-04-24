// helpers
const express = require('express');

const Hashing = require('../helpers/hashing');

// models
const Users = require('../models/users');

const router = express.Router();

async function uniqueEmail(email) {
  const user = await Users.findOne({ email: email });
  console.log(user);
  return user != null ? true : false;
}

router.post('/newUser', async (req, res) => {
  const emailInUse = await uniqueEmail(req.body.email);
  if (emailInUse) return res.status(500).send({ auth: false, msg: 'Email already in use' });

  const new_user = {
    username: req.body.username,
    email: req.body.email,
    password: await Hashing.hashString(req.body.password),
  };

  const u = new Users(new_user);

  await u
    .save()
    .then(() => {
      res.status(200).send({ auth: true, msg: 'User created successfully', userId: u._id, username: u.username });
    })
    .catch((err) => {
      console.log(err);
      res.send({ auth: false, msg: 'Please try again', err });
    });
});

router.post('/login', async (req, res) => {
  const user = await Users.findOne({ email: req.body.email, password: req.body.password });
  if (!user) return res.status(404).send({ auth: false, msg: 'No user with that email' });

  if (user.password == (await Hashing.verifyHash(req.body.password))) {
    res.status(200).send({ auth: true, msg: 'Logged in', userId: user._id, username: user.username });
  } else {
    res.status(500).send({ auth: false, msg: 'Wrong email/password' });
  }
});

module.exports = router;
