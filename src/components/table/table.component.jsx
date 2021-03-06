import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { SearchName } from "../../redux/unsplash/unsplash.actions";

import "./table.styles.css";

const CitiesTable = ({ cities }) => {
  return (
    <div className="table-container">
      {cities ? (
        <table cellPadding="3">
          <thead>
            <tr>
              <th className="table-head">City</th>
              <th className="table-head">Country</th>
              <th className="table-head">Population</th>
              <th className="table-head">Region</th>
            </tr>
          </thead>
          <tbody>
            {cities.data.map((city, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Link
                      onClick={() => SearchName(city.name)}
                      to={`/city/${city.name}/${city.wikiDataId}`}
                    >
                      {city.name}
                    </Link>
                  </td>
                  <td>{city.country}</td>
                  <td>{city.population}</td>
                  <td>{city.region}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <span>Waiting four your Search...</span>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  cities: state.GeodbData.res,
});

export default connect(mapStateToProps, { SearchName })(CitiesTable);
