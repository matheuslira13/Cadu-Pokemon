import { PokemonData } from "@/app/types";
import { FlatList, Image, View } from "react-native";
import detetivePikachu from "../../assets/images/detetivePikachu.png";
import pokebola from "../../assets/images/pokebola.png";
import sadPikachu from "../../assets/images/sadPikachu.png";
import { PokeCard } from "../PokeCard";
import { Separator } from "../Separator";
import { Typography } from "../Typography";

export const Section = ({
  title,
  titleColor,
  data,
}: {
  title: string;
  titleColor: any;
  data: PokemonData[];
}) => {
  return (
    <View style={{ marginBottom: 12, marginTop: 12 }}>
      <Typography color={titleColor} size={20} style={{ paddingLeft: 12 }}>
        {title}
      </Typography>
      <FlatList
        initialNumToRender={data.length}
        data={data}
        horizontal
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <PokeCard item={item} />}
        ItemSeparatorComponent={Separator}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 100,
              width: 50,
            }}
          >
            <Image source={pokebola} style={{ height: 50, width: 50 }} />
          </View>
        }
        ListEmptyComponent={
          <View style={{ alignItems: "center" }}>
            <Typography orientation="center" size={12}>
              N E N H U M &nbsp; P O K E M O N &nbsp; E N C O N T R A D O
            </Typography>
            <Image source={sadPikachu} style={{ height: 80, width: 120 }} />
          </View>
        }
        ListFooterComponent={
          <View style={{ alignItems: "center" }}>
            <Typography orientation="center" size={12}>
              F I M &nbsp; D A &nbsp; L I S T A
            </Typography>
            <Image
              source={detetivePikachu}
              style={{ height: 80, width: 120 }}
            />
          </View>
        }
        getItemLayout={(data, index) => ({
          length: 120,
          offset: 8 + 120 * index,
          index,
        })}
      />
    </View>
  );
};
