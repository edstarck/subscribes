import axios from "axios";
// import { getItem } from "@/helpers/persistanceStorage";

axios.defaults.baseURL = "./config/";

axios.interceptors.request.use((config) => {
  //   const subscribes = getItem("subscribes");
  //   config.headers["subscribes"] = subscribes;

  return config;
});

export default axios;
