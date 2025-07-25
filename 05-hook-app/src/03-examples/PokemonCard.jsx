import React, { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const h2ref = useRef(null);
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = h2ref.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [name]);

  return (
    <section style={{ height: 200 }}>
      <h2 ref={h2ref} className="text-capitalize">
        #{id} - {name}
      </h2>
      <div>
        {sprites.map((img) => (
          <img key={img} src={img} alt={name} />
        ))}
      </div>
      <div>
        <pre>{JSON.stringify(boxSize)}</pre>
      </div>
    </section>
  );
};
