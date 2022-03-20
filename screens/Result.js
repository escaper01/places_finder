import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "../ressources/styles";
import AllQueries from "../components/AllQueries";
import { DataContext } from "../context/DataContext";

export function Result({ route, navigation }) {
  const [text, setText] = useState(route.params["selectedOption"]);
  const [submit, setSubmit] = useState(false);
  const [passedObj, setPassedObj] = useState(route.params);
  const [radius, setRadius] = useState("1500");

  return (
    <View style={{ flex: 1 }}>
      <DataContext.Provider
        value={{
          mySubmit: [submit, setSubmit],
          myText: text,
          myRadius: radius,
        }}
      >
        <ScrollView>
          <View style={styles.result_container}>
            <TextInput
              style={styles.result_text_input}
              onChangeText={setText}
              value={text}
              placeholder="Looking for a particular place"
            />
            <TouchableOpacity
              style={styles.result_btn}
              activeOpacity={0.7}
              onPress={() => {
                console.log("searched clicked");
                setSubmit(true);
              }}
            >
              <Text style={styles.result_btn_text}>Search</Text>
            </TouchableOpacity>
          </View>
          <AllQueries data={passedObj} />
        </ScrollView>
      </DataContext.Provider>
    </View>
  );
}
