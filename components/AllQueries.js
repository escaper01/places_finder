import React, { useEffect, useReducer, useContext } from "react";
import { View, Text } from "react-native";
import { styles } from "../ressources/styles";
import { placeReducer, initialState } from "../reducers/places";
import { actionCreators } from "../reducers/shared";
import Query from "./Query";
import { GoogleMapsKey } from "@env";
import { DataContext } from "../context/DataContext";

export default function AllQueries({ data }) {
  const [state, dispatch] = useReducer(placeReducer, initialState);
  const [cleanedPlaces, setCleanedPlaces] = React.useState();
  const { mySubmit, myText, myRadius } = useContext(DataContext);
  // const value = useContext(DataContext);

  let { latitude, longitude } = data;

  const [submit, setSubmit] = mySubmit;
  // const { text } = myText;
  // const { radius } = myRadius;

  const fetchPlaces = async () => {
    dispatch(actionCreators.loading());

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${myRadius}&rankeby=distance&keyword=${myText}&key=${GoogleMapsKey}`;
    console.log(encodeURI(url), "URLLLLLLLLLLL");
    try {
      const response = await fetch(encodeURI(url));
      const places = await response.json();
      // console.log(places.length, "num of places");
      let temp = await places.results.map((place) => {
        let myphoto;
        try {
          // console.log(place.photos[0].photo_reference, "///");
          myphoto = place.photos[0].photo_reference;
        } catch (e) {
          let myphoto = undefined;
        }

        return {
          placeID: place.place_id,
          name: place.name,
          rating: Math.ceil(place.rating),
          photo_reference: myphoto,
        };
      });
      setCleanedPlaces(temp);
      dispatch(actionCreators.success(cleanedPlaces));
    } catch (e) {
      console.log(e, "errrrrrrr fetching places");
      dispatch(actionCreators.failure());
    }
  };

  useEffect(() => {
    // console.log(text, "on reload");
    fetchPlaces();
  }, []);

  useEffect(() => {
    // console.log(text, "was called after changed", submit);
    if (submit) {
      fetchPlaces();
      setSubmit(false);
    }
  }, [submit]);

  // console.log(state, "state");
  const { places, loading, error } = state;

  if (loading) {
    return (
      <View>
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

  // if (places === undefined || places.length == 0) {
  //   return <Text>nothing was found</Text>;
  // }
  // console.log(places, "palaces");
  return (
    <View style={styles.result_search}>
      {cleanedPlaces.map((elem, i) => (
        <Query data={elem} key={i} />
      ))}
    </View>
  );
}
