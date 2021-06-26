import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import geoCity from "../../axios/geoCity.js";
import unsplash from "../../axios/unsplash";

import "./city-detail.styles.css";

const CityDetail = () => {
  const { id } = useParams();
  useEffect(() => {
    //USING IIFE TO INVOKE FUNCTION ON MOUNTING
    (async () => {
      const response = await geoCity.get(`/cities/${id}`);
      console.log(response.data);
    })();
    //Loading unsplash API photo to show city image
    (async () => {
      const res = await unsplash.get("/photos", {
        params: {
          query: "paris",
          per_page: 1,
        },
      });
      console.log(res.data);
    })();
  }, []);
  return <div className="city-detail">City Detail</div>;
};

export default CityDetail;
