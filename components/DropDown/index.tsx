import React, { useState } from "react";
import {
  FlatList,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import wallpaper1 from "../../assets/images/walpaperModal.jpg";
import wallpaper2 from "../../assets/images/walpaperModal2.jpg";
import wallpaper3 from "../../assets/images/walpaperModal3.jpg";
import wallpaper4 from "../../assets/images/walpaperModal4.jpg";
import wallpaper5 from "../../assets/images/walpaperModal5.jpg";

type PokemonGenerationSelectProps = {
  generations: string[];
  generation: string;
  setGeneration: (value: string) => void;
};

export const PokemonGenerationSelect = ({
  generations,
  generation,
  setGeneration,
}: PokemonGenerationSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    setGeneration(value);
    setIsOpen(false);
  };
  const getRandomBackground = () => {
    const backgroundRoundImg = [
      wallpaper1,
      wallpaper2,
      wallpaper3,
      wallpaper4,
      wallpaper5,
    ];
    const randomIndex = Math.floor(Math.random() * backgroundRoundImg.length);
    return backgroundRoundImg[randomIndex];
  };

  return (
    <View>
      <Pressable style={styles.button} onPress={() => setIsOpen(true)}>
        <Text style={styles.buttonText}>G E R A Ç Ã O {generation} º</Text>
      </Pressable>

      <Modal
        transparent
        visible={isOpen}
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <ImageBackground
          style={{ flex: 1, opacity: 0.8 }}
          source={getRandomBackground()}
        >
          <Pressable style={styles.overlay} onPress={() => setIsOpen(false)}>
            <View style={styles.dropdown}>
              <Text
                style={{
                  color: "#fecc14",
                  fontSize: 30,
                  fontFamily: "PokemonSolid",
                }}
              >
                X
              </Text>
              <FlatList
                data={generations}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => handleSelect(item)}
                    style={styles.item}
                  >
                    <Text style={styles.itemText}>{item} G E R A Ç Ã O</Text>
                  </Pressable>
                )}
              />
            </View>
          </Pressable>
        </ImageBackground>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
  },
  buttonText: {
    color: "yellow",
    fontSize: 20,
    fontFamily: "PokemonSolid",
  },
  overlay: {
    flex: 1,
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  dropdown: {
    borderRadius: 8,
    width: 200,
    paddingVertical: 10,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
  },
});
