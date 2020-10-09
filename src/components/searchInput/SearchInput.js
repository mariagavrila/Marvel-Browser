import React from "react";
//importar iconos de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//Redux
import {useDispatch } from "react-redux";
import { getHeroes } from "../../redux/dataActions";

import "./SearchInput.css";

export default function SearchInput () {
      const dispatch = useDispatch();

    return (
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What hero are you looking for?"
            onChange={(event) => {
              dispatch(getHeroes(event.target.value));
            }}
          />
          <button type="submit" className="searchButton">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    );
}
