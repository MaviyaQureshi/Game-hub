import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "99f7a0a39abb48b0ae5935738b5aae56",
  },
});
