import axios from "axios";

export default axios.create({
  baseURL: "https://api.uniquecoop.com/",
  responseType: "json"
});
