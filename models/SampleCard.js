const mongoose = require('mongoose');
const { Schema } = mongoose;

const sampleCardSchema = new Schema({
  type: String,
  doorDetails: String,
  material: String,
  finish: String,
  feturned: {
    type: Boolean,
    default: false
  },
  returnedDate: Date
});

module.exports = mongoose.model('sampleCards', sampleCardSchema);
