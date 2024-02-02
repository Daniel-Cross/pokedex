import { configureStore } from "@reduxjs/toolkit";
import pokemonDataReducer, {
  getAllPokemon,
  getSinglePokemonData,
} from "../src/store/pokemonDataSlice/pokemonDataSlice";

describe("pokemonData reducer", () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        pokemonData: pokemonDataReducer,
      },
    });
  });

  it("should handle initial state", () => {
    expect(store.getState().pokemonData).toEqual({
      data: [],
      status: "idle",
      error: null,
      singlePokemonData: null,
    });
  });

  it("should handle getAllPokemon.pending", () => {
    store.dispatch(getAllPokemon.pending());
    expect(store.getState().pokemonData.status).toEqual("loading");
  });

  it("should handle getAllPokemon.fulfilled", () => {
    const mockPokemonData = {
      results: [
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      ],
    };
    store.dispatch(getAllPokemon.fulfilled(mockPokemonData));
    expect(store.getState().pokemonData).toEqual({
      data: mockPokemonData.results,
      status: "succeeded",
      error: null,
      singlePokemonData: null,
    });
  });

  it("should handle getAllPokemon.rejected", () => {
    store.dispatch(getAllPokemon.rejected());
    expect(store.getState().pokemonData.status).toEqual("failed");
    expect(store.getState().pokemonData.error).toEqual("Error");
  });

  it("should handle getSinglePokemonData.pending", () => {
    store.dispatch(getSinglePokemonData.pending());
    expect(store.getState().pokemonData.status).toEqual("loading");
  });

  it("should handle getSinglePokemonData.fulfilled", () => {
    const mockPokemonData = {
      name: "eevee",
      sprites: {
        front_default: "https://pokeapi.co/api/v2/pokemon/133/",
      },
      height: 3,
      weight: 1000,
      types: [],
      abilities: [],
    };

    const expectedData = {
      name: "eevee",
      image: "https://pokeapi.co/api/v2/pokemon/133/",
      height: 30,
      weight: 100,
      types: [],
      abilities: [],
    };

    store.dispatch(getSinglePokemonData.fulfilled(mockPokemonData));
    expect(store.getState().pokemonData).toEqual({
      data: [],
      status: "succeeded",
      error: null,
      singlePokemonData: expectedData,
    });
  });

  it("should handle getSinglePokemonData.rejected", () => {
    store.dispatch(getSinglePokemonData.rejected());
    expect(store.getState().pokemonData.status).toEqual("failed");
    expect(store.getState().pokemonData.error).toEqual("Error");
  });
});
