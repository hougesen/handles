// helpers
const express = require('express');
const Generator = require('../helpers/Generator');

// models
const Trees = require('../models/trees');
const Users = require('../models/users');

const router = express.Router();

async function getUserInfo(userId) {
  const user = await Users.findOne({ _id: userId });
  if (user) {
    return {
      userId: user._id,
      username: user.username,
    };
  } else {
    return false;
  }
}

router.get('/:id', async (req, res) => {
  const trees = await Trees.findOne({
    shortCode: req.params.id,
  });

  if (trees) {
    res.status(201).send(trees);
  } else {
    res.status(404).send({ msg: 'Error' });
  }
});

router.get('/userTree/:userId', async (req, res) => {
  const trees = await Trees.findOne({
    userId: req.params.userId,
  });

  if (trees) {
    res.status(200).send(trees);
  } else {
    res.status(404).send({ success: false, msg: 'trees not found' });
  }
});

router.post('/newTree', async (req, res) => {
  const user = await getUserInfo(req.body.userId);
  if (!user) return res.status(404).send({ success: false, msg: 'User does not exist' });

  const new_tree = {
    userId: user.userId,
    shortCode: user.username,
    treeTitle: user.username,
    links: req.body.links,
  };

  if (req.body.treeImage) new_tree.treeImage = req.body.treeImage;

  const t = new Trees(new_tree);

  await t
    .save()
    .then(() => {
      res.status(201).send({ success: true, msg: 'Success', t });
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        msg: 'New tree failed',
        err,
      });
    });
});

router.put('/updateTree', async (req, res) => {
  const link_tree = await Trees.findOne({
    _id: req.body.treeId,
  });

  if (link_tree === null) return res.status(404).send({ success: false, msg: 'Tree not found' });

  link_tree.links = req.body.links;
  link_tree.extra.updated = new Date();

  if (req.body.treeImage) new_tree.treeImage = req.body.treeImage;

  await link_tree
    .save()
    .then(() => {
      res.status(200).send({ success: true, msg: 'Link tree update', link_tree });
    })
    .catch((err) => {
      res.status(400).send({ success: false, msg: 'Update failed', err });
    });
});

module.exports = router;
