import React from "react";
import { NavLink, Link } from "react-router-dom";
import Movie from "./Movie";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>

    {props.list.map(el => {
      return (
        <NavLink to='/'>
        <span className="saved-movie">
          <Link to={`/movies/${el.id}`}> {el.title} </Link>
        </span>
        </NavLink>
      );
    })}

    <div className="home-button">
      <NavLink to="/">Home</NavLink>
    </div>
  </div>
);

export default SavedList;
