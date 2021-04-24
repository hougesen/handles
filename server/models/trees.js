const mongoose = require('mongoose');

const trees = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trees',
  },
  shortCode: {
    type: String,
  },
  treeTitle: {
    type: String,
  },
  treeImage: {
    type: String,
    default: null,
  },
  extra: {
    views: {
      type: Number,
      default: 0,
    },
    created: {
      type: Date,
      default: Date.now,
    },
    updated: {
      type: Date,
      default: Date.now,
    },
  },
  links: [
    {
      title: {
        type: String,
      },
      link: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
});

const Trees = mongoose.model('Trees', trees);
module.exports = Trees;
