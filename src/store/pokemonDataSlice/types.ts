export enum REDUX_REQUEST_STATUS {
  IDLE = "idle",
  LOADING = "loading",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

export interface AllPokemonData {
  name: string;
  url: string;
}

export interface SinglePokemonData {
  name: string;
  image: string;
  height: number;
  weight: number;
  types: string[];
  abilities: string[];
}

export interface PokemonSpriteData {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
}

export interface PokemonDataObject {
  name: string;
  url: string;
}

export interface PokemonStatsData {
  base_stat: number;
  effort: number;
  stat: PokemonDataObject;
}
