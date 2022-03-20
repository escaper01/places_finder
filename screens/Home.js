import React, { useEffect } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import myImage from "../assets/image1.png";
import { styles } from "../ressources/styles";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [location, setLocation] = React.useState(null);
  const [clicked, setClicked] = React.useState();
  const [errorMsg, setErrorMsg] = React.useState(null);

  const goNext = () => navigation.push("Selection");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      //activate precise location
      Location.enableNetworkProviderAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        setLocation(null);
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setErrorMsg(null);
      } catch (err) {
        console.log(errorMsg, "err");
        throw err;
      }
    })();
  }, [clicked]);

  return (
    <View style={styles.home_container}>
      <Image source={myImage} style={styles.home_image} />
      {!location && (
        <>
          <Text style={styles.home_text}>Where Am I..?</Text>
          <MaterialIcons
            name="my-location"
            color="orange"
            size={30}
            style={styles.home_icon}
            onPress={() => {
              if (location === null) {
                setClicked(!clicked);
              }
            }}
          />
        </>
      )}
      {location && (
        <>
          <MaterialIcons name="check-circle" size={30} color="green" />
          <Text>
            {location.coords.latitude} , {location.coords.longitude}
          </Text>
          <TouchableOpacity
            style={styles.home_btn}
            activeOpacity={0.7}
            onPress={() => {
              const data = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              };
              navigation.push("Selection", data);
            }}
          >
            <Text style={styles.home_btn_text}>Next</Text>
          </TouchableOpacity>
        </>
      )}

      {errorMsg && <Text>{errorMsg}</Text>}
    </View>
  );
}
