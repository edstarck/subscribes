import axios from "@/api/axios";

const getPreferences = (url) => {
  return axios.get(url);
};

export default { getPreferences };
