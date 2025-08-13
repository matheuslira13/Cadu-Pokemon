export interface PokemonData {
  name: string;
  pokemons: PokemonDetails[];
}

export interface PokemonDetails {
  id: number;
  name: string;
  pokemonsprites: PokemonSprite[];
  pokemontypes: PokemonType[];
}

export interface PokemonSprite {
  sprites: SpriteData;
}

export interface SpriteData {
  other?: {
    home?: SpriteImages;
    showdown?: SpriteImages;
    dream_world?: SpriteImages;
    ["official-artwork"]?: SpriteImages;
  };
  versions?: any; // Pode tipar mais detalhadamente se for usar
  back_shiny?: string;
  back_female?: string | null;
  front_shiny?: string;
  back_default?: string;
  front_female?: string | null;
  front_default?: string;
  back_shiny_female?: string | null;
  front_shiny_female?: string | null;
}

export interface SpriteImages {
  front_shiny?: string;
  front_female?: string | null;
  front_default?: string;
  front_shiny_female?: string | null;
  back_shiny?: string;
  back_female?: string | null;
  back_default?: string;
  back_shiny_female?: string | null;
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export const POKEMON_TYPES = [
  { key: "fire", label: "F O G O", color: "red" },
  { key: "water", label: "Á G U A", color: "blue" },
  { key: "grass", label: "G R A M A", color: "green" },
  { key: "electric", label: "É L E T R I C O", color: "yellow" },
  { key: "ice", label: "G E L O", color: "blue" },
  { key: "psychic", label: "P S Í Q U I C O", color: "white" },
  { key: "dragon", label: "D R A G Ã O", color: "white" },
  { key: "bug", label: "I N S E T O", color: "white" },
  { key: "ground", label: "T E R R A", color: "white" },
  { key: "fighting", label: "L U T A D O R", color: "white" },
  { key: "flying", label: "V O A D O R", color: "white" },
  { key: "rock", label: "P E D R A", color: "white" },
  { key: "normal", label: "N O R M A L", color: "white" },
  { key: "poison", label: "V E N E N O S O", color: "white" },
  { key: "dark", label: "E S C U R I D Ã O", color: "white" },
  { key: "steel", label: "A Ç O", color: "white" },
  { key: "ghost", label: "F A N T A S M A", color: "white" },
  { key: "fairy", label: "F A D A", color: "white" },
  // normalmente "shadow" e "unknown" não aparecem nas gerações clássicas,
  // mas se quiser manter é só descomentar:
  // { key: "shadow", label: "S O M B R A", color: "white" },
  // { key: "unknown", label: "D E S C O N H E C I D O", color: "white" },
];
