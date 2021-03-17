const mongoose = require('mongoose');
const Courses = mongoose.model('courses');

module.exports = (app) => {
  // use http://localhost:5000/course/find/:id
  app.get(`/course/find/:id`, async (req, res) => {
    const {id} = req.params;
    console.log("find() query for: ", id);
    ret =  await Courses.find({
      id: id
    });
    return res.status(200).send(ret);
  });

  // app.get(`/api/product`, async (req, res) => {
  //   let products = await Product.find();
  //   return res.status(200).send(products);
  // });

  // app.post(`/api/product/add`, async (req, res) => {
  //   let product = await Product.create(req.body);
  //   return res.status(201).send({
  //     error: false,
  //     product
  //   })
  // })

  // app.put(`/api/product/:id`, async (req, res) => {
  //   const {id} = req.params;

  //   let product = await Product.findByIdAndUpdate(id, req.body);

  //   return res.status(202).send({
  //     error: false,
  //     product
  //   })

  // });

  // app.delete(`/api/product/:id`, async (req, res) => {
  //   const {id} = req.params;

  //   let product = await Product.findByIdAndDelete(id);

  //   return res.status(202).send({
  //     error: false,
  //     product
  //   })

  // });

  // app.post(`/api/product/remove`, async(req, res)=>{
  //   let l = await Product.remove({name: req.body.name})
  //   console.log(req.body.name);
  //   return res.status(202).send({
  //     error: false,
  //     l
  //   });
  // });
};