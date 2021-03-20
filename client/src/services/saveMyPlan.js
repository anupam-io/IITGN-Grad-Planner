import url from "./../url";
const axios = require("axios");

export default async  function saveMyPlan(name, data){
  let val;
  await axios
    .post(url+"/savePlan", {
      name: name,
      data: data,
    })
    .then((e) => {
      console.log("resolved.");
      val = e.data.error;
    })
    .catch((error) => {
      console.log("printing error");
      console.error(error);
    });
  
  return val;
};
