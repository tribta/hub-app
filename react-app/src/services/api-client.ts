import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4783d12f6aad449c97286e04d1ac64dd",
  },
});
