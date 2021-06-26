import axios from "axios";

export default axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo",
  headers: {
    "x-rapidapi-key": "afa62d2df9msh8341a00963121a3p1c364djsn59c216ced41b",
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
});
