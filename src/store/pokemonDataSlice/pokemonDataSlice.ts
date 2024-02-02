import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AllPokemonData,
  REDUX_REQUEST_STATUS,
  SinglePokemonData,
} from "./types";

interface PokemonDataState {
  data: AllPokemonData[];
  status: REDUX_REQUEST_STATUS;
  error: string | null;
  singlePokemonData: SinglePokemonData | null;
}

const initialState: PokemonDataState = {
  data: [],
  status: REDUX_REQUEST_STATUS.IDLE,
  error: null,
  singlePokemonData: null,
};

export const getAllPokemon: any = createAsyncThunk(
  "pokemonData/getRandomStarterPokemon",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=2000`
      ).then((res) => res.json());
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const getSinglePokemonData: any = createAsyncThunk(
  "pokemonData/getSinglePokemonData",
  async (url: string, thunkAPI) => {
    try {
      const res = await fetch(url).then((res) => res.json());
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const pokemonData = createSlice({
  name: "pokemonData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPokemon.pending, (state) => {
        state.status = REDUX_REQUEST_STATUS.LOADING;
      })
      .addCase(getAllPokemon.fulfilled, (state, action) => {
        state.status = REDUX_REQUEST_STATUS.SUCCEEDED;
        state.data = action.payload.results;
        return state;
      })
      .addCase(getAllPokemon.rejected, (state) => {
        state.status = REDUX_REQUEST_STATUS.FAILED;
        state.error = "Error";
      });
    builder
      .addCase(getSinglePokemonData.pending, (state) => {
        state.status = REDUX_REQUEST_STATUS.LOADING;
      })
      .addCase(getSinglePokemonData.fulfilled, (state, action) => {
        state.status = REDUX_REQUEST_STATUS.SUCCEEDED;
        const structureData = {
          name: action.payload.name,
          image: action.payload.sprites.front_default,
          height: action.payload.height * 10,
          weight: action.payload.weight / 10,
          types: action.payload.types.map((type: any) => type.type.name),
          abilities: action.payload.abilities.map(
            (ability: any) => ability.ability.name
          ),
        };
        state.singlePokemonData = { ...structureData };
        return state;
      })
      .addCase(getSinglePokemonData.rejected, (state) => {
        state.status = REDUX_REQUEST_STATUS.FAILED;
        state.error = "Error";
      });
  },
});

export const {} = pokemonData.actions;

export default pokemonData.reducer;
