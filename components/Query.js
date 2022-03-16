import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";
import { styles } from "../ressources/styles";
import { GoogleMapsKey } from "@env";

export default function Query({ data }) {
  const { placeID, name, rating } = data;

  let stars = new Array(rating).fill(0);
  let rest = 5 - rating;
  let emptyStars = new Array(rest).fill(0);

  return (
    <View style={styles.result_query}>
      <Image
        style={styles.result_image}
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aap_uECH2YCNH73qY_1NbomozuSNj4Hp8dYSI5UJN0w6Y185MHP3XcKBav6IY8a9Hv54pQEU_vC4NDULL8NWEtaAgYdgq0MptfiDQ7cFj5nwb5qzlN33tVsOnIAbgsTUMCiaEPhn4nndzq4YDdqdCfVKNHQJKRCN0LONL4F0jU5YQ6Y8dJa8&key=${GoogleMapsKey}`,
        }}
      />
      <Text style={styles.result_text}>{name}</Text>
      <View style={styles.result_stars}>
        {stars.map((_, i) => (
          <MaterialIcons name="star-rate" size={24} color="#F8C822" key={i} />
        ))}
        {rest !== 0
          ? emptyStars.map((_, i) => (
              <MaterialIcons name="star-rate" size={24} color="black" key={i} />
            ))
          : undefined}
      </View>
    </View>
  );
}
