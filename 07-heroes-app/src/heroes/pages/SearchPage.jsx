import React from "react";
import { HeroCard } from "../components";
import { useForm } from "../../hooks";
import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";

const AlertMessage = ({ message, type }) => {
  return (
    <div className={`alert alert-${type} animate__animated animate__fadeIn`}>
      <p>{message}</p>
    </div>
  );
};

export const SearchPage = () => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });
  const navigate = useNavigate();
  const heroes = getHeroesByName(q);

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`/search?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Search a hero"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q.length === 0 && (
            <AlertMessage message="Search a hero" type="primary" />
          )}

          {q.length > 0 && heroes.length === 0 && (
            <AlertMessage message={`No hero with ${q}`} type="danger" />
          )}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  );
};
