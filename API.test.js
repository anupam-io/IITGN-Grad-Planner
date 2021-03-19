const axios = require("axios");

async function main() {
  const savePlan = `https:localhost:5000/savePlan`;
  await axios
    .post(savePlan, {
      name: "abcd",
      data: [[[[]]]],
    })
    .then((res) => {
      console.log("savePlan success.");
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}

main();
