const mongoose = require('mongoose');
const DefaultSem = mongoose.model('defsem');
const Courses = mongoose.model('courses');

module.exports = (app) => {
  // use http://localhost:5000/defsem
  app.get(`/defsem`, async (req, res) => {
    console.log("Client detected.");
    let data = await DefaultSem.find({});

    bigObject = [];

    Courses.find();

    var semester = 1;
    for(i=0;i<data.length;i++){
      console.log(data[i]);
      

      temp = [];

      for (j=0;j<data[i].courses.length;j+=1)
      {
        const query = Courses.findOne({'id': data[i].courses[j]})
        temp.push(
          {
            query
          }
        )
      }
      
      bigObject.push(
        {
          "sem": data[i].sem,
          "courses": temp
        }
      )
    }

    // read name of courses
    // search in our database
    // create new bigger object with more data
    // id, name, credits


    console.log(bigObject);
    return res.status(200).send(["hello, world"]);
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