import React, { useEffect, useReducer } from "react";
import { View, Text } from "react-native";
import { styles } from "../ressources/styles";
import { placeReducer, initialState } from "../reducers/places";
import { actionCreators } from "../reducers/shared";
import Query from "./Query";

export default function AllQueries() {
  const [state, dispatch] = useReducer(placeReducer, initialState);
  const [cleanedPlaces, setCleanedPlaces] = React.useState();

  useEffect(() => {
    async function fetchPlaces() {
      dispatch(actionCreators.loading());

      try {
        const response = await fetch(
          "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=31.598763,-8.029373&radius=1000&rankeby=distance&keyword=pharmacie&key=AIzaSyDbL6eGtZoFeuFm02UEpeZmYp7o5kVEKbo"
        );
        const places = await response.json();

        let temp = await places.results.map((place) => {
          return {
            placeID: place.place_id,
            name: place.name,
            // photo: place.photos,
            rating: Math.ceil(place.rating),
          };
        });
        setCleanedPlaces(temp);
        dispatch(actionCreators.success(cleanedPlaces));
      } catch (e) {
        dispatch(actionCreators.failure());
      }
    }
    fetchPlaces();
  }, []);

  const { places, loading, error } = state;

  if (loading) {
    return (
      <View>
        {/* <ActivityIndicator animating={true} /> */}
        <Text>loading</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>failure</Text>
      </View>
    );
  }

  return (
    <View style={styles.result_search}>
      {cleanedPlaces.map((elem, i) => (
        <Query data={elem} key={i} />
      ))}
    </View>
  );
}
