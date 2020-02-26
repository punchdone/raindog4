const mongoose = require('mongoose');
const { Schema } = mongoose;
const User = require('./User');
const SampleCards = require('./SampleCard');
const mongoosePaginate = require('mongoose-paginate');
const autoIncrement = require('mongoose-auto-increment');

const checkoutCardSchema = new Schema({
  name: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  email: String,
  createdDate: Date,
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  samples: [
    {
      type: Schema.Types.ObjectId,
      ref: 'SampleCards'
    }
  ]
});

checkoutCardSchema.pre('remove', async function() {
  await SampleCard.remove({
    _id: {
      $in: this.lines
    }
  });
});

autoIncrement.initialize(mongoose.connection);

checkoutCardSchema.plugin(autoIncrement.plugin, {
  model: 'checkoutCards',
  field: 'checkoutId',
  startAt: 100,
  incrementBy: 1
});

checkoutCardSchema.plugin(mongoosePaginate);

mongoose.model('checkoutCards', checkoutCardSchema);
