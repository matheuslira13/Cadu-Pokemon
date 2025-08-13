import { PokemonGenerationSelect } from "@/components/DropDown";
import { Section } from "@/components/SectionPokemon";
import { Typography } from "@/components/Typography";
import { useQuery } from "@apollo/client";
import { useFonts } from "expo-font";
import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import logo2 from "../assets/images/logo-removebg-preview.png";
import { GET_POKEMONS } from "../graphql";
import { POKEMON_TYPES, PokemonData } from "./types";

export default function HomeScreen() {
  const generationChoice = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const [fontsLoaded] = useFonts({
    PokemonSolid: require("../assets/fonts/PokemonSolid.ttf"),
    PokemonHollow: require("../assets/fonts/PokemonHollow.ttf"),
  });
  const [generation, setGeneration] = useState<string>("1");

  const { data, loading, error, refetch } = useQuery(GET_POKEMONS, {
    variables: { id: parseInt(generation) },
    fetchPolicy: "network-only",
  });
  const [pokemonDataArray, setPokemonDataArray] = useState<
    PokemonData[] | undefined
  >();

  useEffect(() => {
    if (!loading && !data) {
      refetch({ id: parseInt(generation) });
      return;
    }

    if (!loading && data) {
      setPokemonDataArray(data?.generation[0].pokemonspecies);
    }

    if (error) {
      console.error("Erro no GraphQL:", error.message);
    }
  }, [generation, loading, data, error]);

  if (!fontsLoaded) {
    return null;
  }

  const hasType = (poke: PokemonData, typeKey: string) =>
    poke.pokemons?.[0]?.pokemontypes?.some((t) => t.type?.name === typeKey);

  const sections = useMemo(() => {
    if (!pokemonDataArray) return [];
    return POKEMON_TYPES.map(({ key, label, color }) => ({
      key,
      label,
      color,

      data: pokemonDataArray.filter((p) => hasType(p, key)),
    })); // mostra só se tiver itens
  }, [pokemonDataArray]);
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ color: "white" }}>Carregando pokémons...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ color: "red" }}>
          Erro ao buscar dados. Tente novamente.
        </Text>
        <Button
          title="Recarregar"
          onPress={() => refetch({ id: parseInt(generation) })}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo2} style={styles.logo} />
      <PokemonGenerationSelect
        generation={generation}
        generations={generationChoice}
        setGeneration={setGeneration}
      />

      <Typography size={16}>
        {pokemonDataArray?.length} P O K E M O N S
      </Typography>
      <ScrollView showsVerticalScrollIndicator={false}>
        {sections.map((section) => (
          <Section
            key={section.key}
            title={section.label}
            titleColor={section.color as any}
            data={section.data}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000",
    paddingTop: 30,
  },
  logo: {
    width: 200,
    height: 120,
    margin: 20,
  },
});
