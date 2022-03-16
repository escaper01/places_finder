import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "../ressources/styles";
import AllQueries from "../components/AllQueries";

const Result = ({ route, navigation }) => {
  console.log(route.params, "ifooooooo");
  const [text, setText] = React.useState("");
  return (
    <View style={{ flex: 1 }}>
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
              alert("search pressed");
            }}
          >
            <Text style={styles.result_btn_text}>Search</Text>
          </TouchableOpacity>
        </View>
        <AllQueries />
      </ScrollView>
    </View>
  );
};

export default Result;
