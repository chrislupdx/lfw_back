const mongoose = require('mongoose');

const jobappSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Jobapp', jobappSchema);
