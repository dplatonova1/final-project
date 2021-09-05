import React from "react";
import { useSelector } from "react-redux";
import Container from "../container";

const CollectedPage = () => {
  const collected = useSelector((state) =>
    state.pokemons.filter((pokemon) => pokemon.id < 5)
  );
  return <Container pokemons={collected} />;
};

export default CollectedPage;
