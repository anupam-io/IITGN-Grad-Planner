const axios = require("axios");

async function main() {
  const savePlan = `https:localhost:5000/savePlan`;
  const status = `https:localhost:5000/status`;
  try {  
    await axios
    .get(status)
    .then((res) => {
      console.log("savePlan success.");
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
    // await axios
    // .post(savePlan, {
    //   name: "abcd",
    //   data: [[[[]]]],
    // })
    // .then((res) => {
    //   console.log("savePlan success.");
    //   console.log(res);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  } catch (error) {
  }
}

main();