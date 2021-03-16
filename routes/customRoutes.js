const mongoose = require('mongoose');
const Product = mongoose.model('products');

module.exports = (app) => {
  // use http://localhost:5000/api/custom/status to get the status of server
  app.get(`/api/custom/status`, async (req, res) => {
    return res.status(200).send([{"status": "OK"}]);
  });

  app.put(`/api/product/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product
    })
  });
};