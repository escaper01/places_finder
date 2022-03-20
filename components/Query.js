import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";
import { styles } from "../ressources/styles";
import { GoogleMapsKey } from "@env";
import noImage from "../assets/no-image.png";

export default function Query({ data }) {
  const { placeID, name, rating, photo_reference } = data;

  let stars = new Array(rating).fill(0);
  let rest = 5 - rating;
  let emptyStars = new Array(rest).fill(0);

  // console.log(photo_reference, "REFFFFFFFFFFFFFF");

  const imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference}&key=${GoogleMapsKey}`;

  return (
    <View style={styles.result_query}>
      {photo_reference ? (
        <Image
          style={styles.result_image}
          source={{
            uri: imageUrl,
          }}
        />
      ) : (
        <Image style={styles.result_image} source={noImage} />
      )}
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
