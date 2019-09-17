import React from "react";
import { NavLink, Link, Route } from "react-router-dom";
import Movie from "./Movie";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>

    {props.list.map(movie => (
      <Link to={`/movies/${movie.id}`}>
        {" "}
        <span className="saved-movie">{movie.title}</span>
      </Link>
    ))}

    <div className="home-button">
      <NavLink to="/">Home</NavLink>
    </div>
  </div>
);

export default SavedList;
