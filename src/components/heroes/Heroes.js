import React from "react";
import ModalDetails from "../details/Details";
//Redux
import { useSelector } from "react-redux";

import "./Heroes.css";

export default function Heroes() {
  let heroes = useSelector((state) => state.heroes);
  let notFound = heroes ? "" : "Heroes not found";
  let random = 0;
  return (
    <div className="container">
      <div className="cards">
        {heroes.length > 0 ? (
          heroes.map((h) => (
            <a className="card" href="#" key={h.id}>
              <span className="hide">{(random = random + 1)}</span>
              <span
                className="card-header"
                style={{
                  backgroundImage: `url(http://placeimg.com/400/250/animals?random=${random})`,
                }}
              >
                <span className="card-title">
                  <h3>{h.name}</h3>
                </span>
              </span>
              <span className="card-summary">
                <span>Comics: {h.comics ? h.comics.available : 0}</span>
                <span>Series: {h.series ? h.series.available : 0}</span>
                <span>Stories: {h.stories ? h.stories.available : 0}</span>
                {h.description ? h.description : ""}
              </span>
              <ModalDetails
                hero={h}
                urlImage={`url(http://placeimg.com/400/250/animals?random=${random})`}
              />
            </a>
          ))
        ) : (
          <h1>{notFound}</h1>
        )}
      </div>
    </div>
  );
}
