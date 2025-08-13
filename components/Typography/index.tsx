import React, { ReactNode } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { styles } from "./styles";

export type TypographyProps = {
  children: ReactNode;
  size: 48 | 40 | 32 | 28 | 24 | 20 | 16 | 12 | 8;
  color?:
    | "primaryOrange"
    | "secondOrange"
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "blackPrimay"
    | "blackSecond"
    | "blackTertiary"
    | "white"
    | "primaryGray"
    | "secondGray"
    | "tertiaryGray"
    | "quaternaryGray"
    | "quinaryGray";
  bold?: boolean;
  orientation?: "center" | "left" | "right";
  style?: StyleProp<any>;
};

export const Typography = ({
  children,
  size,
  color = "white",
  bold = false,
  orientation,
  style,
}: TypographyProps) => {
  let selectColor = {
    primaryOrange: styles.primaryOrange,
    secondOrange: styles.secondOrange,
    blackPrimay: styles.blackPrimay,
    blackSecond: styles.blackSecond,
    blackTertiary: styles.blackTertiary,
    primaryGray: styles.primaryGray,
    secondGray: styles.secondGray,
    tertiaryGray: styles.tertiaryGray,
    quaternaryGray: styles.quaternaryGray,
    quinaryGray: styles.quinaryGray,
    blue: styles.blue,
    green: styles.green,
    yellow: styles.yellow,
    red: styles.red,
    white: styles.white,
  }[color];

  const textStyle: StyleProp<TextStyle> = {
    fontSize: size,
    fontWeight: bold ? "bold" : undefined,
    textAlign: orientation ? orientation : undefined,
  };

  return (
    <Text
      style={[{ fontFamily: "PokemonSolid" }, style, selectColor, textStyle]}
    >
      {children}
    </Text>
  );
};
