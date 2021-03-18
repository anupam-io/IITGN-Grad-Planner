const axios = require("axios");
const endPoint = "/findPlanByName";

export default async (name) => {
  let ret = await axios.post(endPoint, {
    name: name,
  });
  console.log("loadPlan success.");
  return ret;
};
