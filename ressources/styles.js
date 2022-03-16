import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //HOME
  home_container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  home_image: {
    width: 360,
    height: 400,
  },
  home_icon: {},

  home_text: {
    color: "grey",
    fontSize: 24,
    textAlign: "center",
  },

  //SELECTION
  selection_container: {
    flex: 1,
    alignItems: "center",
    marginTop: 110,
    marginBottom: 110,
  },

  selection_text: {
    fontSize: 30,
  },

  selection_btn: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    height: 66,
    width: 158,
    margin: 20,
    padding: 8,
    borderRadius: 0,
    backgroundColor: "#3ab795",
  },

  selection_btn_text: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    flex: 1,
  },

  selection_btn_icon: {},

  selection_selection: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },

  //RESULT
  result_container: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: "15%",
  },
  result_text_input: {
    width: "85%",
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#4c1e4f",
    padding: 10,
  },
  result_btn: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: "30%",
    padding: 5,
    marginTop: "2%",
    marginBottom: "4%",
    borderRadius: 10,
    backgroundColor: "#fa7e61",
  },
  result_btn_text: {
    fontSize: 20,
    color: "white",
  },
  result_image: {
    width: "100%",
    height: 170,
  },
  result_stars: {
    flexDirection: "row",
    width: "30%",
  },
  result_text: {
    fontSize: 15,
    color: "black",
  },
  result_query: {
    width: "45%",
    marginBottom: 20,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  result_search: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 13,
    // borderWidth: 1,
    // borderColor: "red",
  },
});
