import url from "../url";
const axios = require("axios");

export default async function loadDefaultSem(){
  let ret = await axios.get(url+"/defsem");
  console.log("loadDefaultSem success.");
  return ret.data;
};
