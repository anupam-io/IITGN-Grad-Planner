import url from "../url";
const axios = require("axios");

export default async function loadMyPlan(name){
  let ret = await axios.post(url+"/findPlanByName", {
    name: name,
  });
  console.log("loadPlan success.");
  return ret;
};
