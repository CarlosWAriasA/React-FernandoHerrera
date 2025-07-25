import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";

export const Layout = () => {
  const { increment, decrement, counter } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Information Pokemon</h1>
      <hr />
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
          id={data.id}
        />
      )}
      <button
        className={`btn btn-primary mt-2 ${counter === 1 ? "disabled" : ""}`}
        onClick={() => {
          if (counter === 1) return;
          decrement();
        }}
      >
        Previous
      </button>
      <button className="btn btn-primary mt-2" onClick={() => increment()}>
        Next
      </button>
    </>
  );
};
