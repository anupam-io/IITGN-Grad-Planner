const axios = require("axios");
const endPoint = "https://cryptic-bayou-91116.herokuapp.com/findPlanByName";

export default async function loadMyPlan(name){
  let ret = await axios.post(endPoint, {
    name: name,
  });
  console.log("loadPlan success.");
  return ret;
};
