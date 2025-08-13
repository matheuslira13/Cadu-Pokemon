import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query GetPokemons($id: Int!) {
    generation(where: { id: { _eq: $id } }) {
      name
      pokemonspecies {
        name
        pokemons(limit: 1) {
          id
          name
          pokemonsprites {
            sprites
          }
          pokemontypes {
            type {
              name
            }
          }
        }
      }
    }
  }
`;
