import React from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section style={{ height: 200 }}>
      <h1 className="text-capitalize">
        #{id} - {name}
      </h1>
      <div>
        {sprites.map((img) => (
          <img key={img} src={img} alt={name} />
        ))}
      </div>
    </section>
  );
};
