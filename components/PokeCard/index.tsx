import { PokemonData } from "@/app/types";
import { Image, Text, View } from "react-native";

export const PokeCard = ({ item }: { item: PokemonData }) => {
  const uri = item.pokemons?.[0]?.pokemonsprites?.[0]?.sprites?.front_default;
  return (
    <View style={{ alignItems: "center", width: 120 }}>
      {!!uri && (
        <Image
          style={{
            height: 100,
            width: 100,
            borderRadius: 8,
            backgroundColor: "#111",
          }}
          source={{ uri }}
        />
      )}
      <Text style={{ color: "white", marginTop: 6 }}>{item.name}</Text>
    </View>
  );
};
