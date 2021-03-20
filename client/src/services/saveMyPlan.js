const axios = require("axios");
const endPoint = "https://cryptic-bayou-91116.herokuapp.com/savePlan";

export default async  function saveMyPlan(name, data){
  let val;
  await axios
    .post(endPoint, {
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
