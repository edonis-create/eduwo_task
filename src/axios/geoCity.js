import axios from "axios";

export default axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo",
  headers: {
    "x-rapidapi-key": "a39ce263b3msh0777af31a99e1bdp14bee6jsn572fb090cf8d",
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
});
