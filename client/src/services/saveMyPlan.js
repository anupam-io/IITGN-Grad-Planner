const axios = require("axios");
const endPoint = "/savePlan";

export default async (name, data) => {
  await axios
    .post(endPoint, {
      name: name,
      data: data,
    })
    .then((res) => {
      console.log("savePlan success.");
    })
    .catch((error) => {
      console.error(error);
    });
};
