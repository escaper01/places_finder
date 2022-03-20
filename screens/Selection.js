import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../ressources/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { icons } from "../ressources/icons";

export default function Selection({ route, navigation }) {
  const allOptions = icons.map((element, index) => {
    return (
      <TouchableOpacity
        style={styles.selection_btn}
        activeOpacity={0.7}
        onPress={() => {
          const { latitude, longitude } = route.params;
          const data = {
            latitude,
            longitude,
            selectedOption: element.name,
          };
          navigation.push("Result", data);
        }}
        key={index}
      >
        <MaterialIcons name={element.icon} size={30} color="black" />
        <Text style={styles.selection_btn_text}>{element.name}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.selection_container}>
      <Text style={styles.selection_text}>I wanna go to:</Text>
      <View style={styles.selection_selection}>{allOptions}</View>
    </View>
  );
}
