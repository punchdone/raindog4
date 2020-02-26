const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');

const SampleCard = mongoose.model('sampleCards');

module.exports = app => {
  app.post('/api/samples', requireLogin, async (req, res) => {

    const { name, address1, address2, city, state, zip, phone, email, samples } = req.body;

    const sampleCard = new SampleCard({
      name,
      address1,
      address2,
      city,
      state,
      zip,
      phone,
      email,
      samples: {},
      _user: req.user.id,
      createdDate: Date.now()
    });

    await sampleCard.save();

  });
};
