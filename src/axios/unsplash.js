import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/search",
  headers: {
    Authorization: "Client-ID KTFBAKmB6IAL236S18gTas9UkZ9DihPM1xyf_k1y1xk",
  },
});
