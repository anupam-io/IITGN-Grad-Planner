const mongoose = require("mongoose");
const Courses = mongoose.model("courses");
const DefaultSem = mongoose.model("defsem");
const Plans = mongoose.model("plans");

module.exports = (app) => {
  app.get(`/status`, async (req, res) => {
    return res.status(200).send({ status: "OK" });
  });

  app.get(`/course/find/:id`, async (req, res) => {
    const { id } = req.params;
    console.log("find() query for: ", id);
    ret = await Courses.find({
      id: id,
    });
    return res.status(200).send(ret);
  });

  app.get(`/allPlans`, async (req, res) => {
    console.log("allPlans() query");
    ret = await Plans.find({});
    f = [];
    for (i = 0; i < ret.length; i++) {
      f.push(ret[i].name);
    }
    console.log(f);
    return res.status(200).send(f);
  });

  app.get(`/defsem`, async (req, res) => {
    console.log("defsem request.");
    const data = require("./../initData/defaultSem.json");
    return res.status(200).send(data);
  });

  app.post(`/savePlan`, async (req, res) => {
    console.log("savePlan request.");

    console.log(req.body.name);
    // console.log(req.body.data);
    await Plans.remove({
      name: req.body.name
    });
    
    try {
      await Plans.create({
        name: req.body.name,
        data: req.body.data,
      });
      return res.status(200).send({
        error: false
      });
    } catch (error) {
      return res.status(200).send({
        error: true
      });  
    }
  });

  app.post(`/findPlanByName`, async (req, res) => {
    console.log("findPlanByName request.");
    console.log(req.body.name);

    let ret = await Plans.findOne({
      name: req.body.name,
    });

    if (ret == null) {
      console.log("Not found.");
      return res.status(200).send({
        status: false,
      });
    } else {
      console.log("found", ret.data);
      return res.status(200).send({
        status: true,
        data: ret.data,
      });
    }
  });
};
