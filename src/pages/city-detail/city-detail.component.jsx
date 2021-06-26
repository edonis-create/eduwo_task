import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import geoCity from "../../axios/geoCity.js";
import unsplash from "../../axios/unsplash";

import "./city-detail.styles.css";

const CityDetail = () => {
  const [cityData, setCityData] = useState("");
  const [cityImage, setCityImage] = useState("");
  const { cityname, id } = useParams();

  useEffect(() => {
    //USING IIFE TO INVOKE FUNCTION ON MOUNTING
    (async () => {
      const response = await geoCity.get(`/cities/${id}`);
      setCityData(response.data);
    })();
    //Loading unsplash API photo to show city image
    (async () => {
      const res = await unsplash.get("/photos", {
        params: {
          query: cityname,
          per_page: 1,
        },
      });
      setCityImage(res.data.results[0]?.urls.regular);
    })();
  }, []);
  return (
    <div className="city-detail">
      {cityImage ? (
        <div className="image" style={{ background: `url(${cityImage})` }} />
      ) : (
        <div className="image-alternative" />
      )}
      {cityData ? (
        <div className="table-data">
          <h2 className="title">{cityname}</h2>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <th>Country</th>
                <td>{cityData.data.country}</td>
              </tr>
              <tr>
                <th>Latitude</th>
                <td>{cityData.data.latitude}</td>
              </tr>
              <tr>
                <th>Longitude</th>
                <td>{cityData.data.longitude}</td>
              </tr>
              <tr>
                <th>Region</th>
                <td>{cityData.data.region}</td>
              </tr>
              <tr>
                <th>Populaion</th>
                <td>{cityData.data.population}</td>
              </tr>
              <tr>
                <th>Time Zone</th>
                <td>{cityData.data.timezone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <span>Waiting...</span>
      )}
    </div>
  );
};

export default CityDetail;
