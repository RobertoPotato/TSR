import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import FAB from "../components/FAB";
import { connect } from "react-redux";

//<Image style={styles.image} source={{ uri: goalToShow.imageUrl }} />
const GoalDetailScreen = props => {
  console.log("=================================================================================")
  console.log(props)


  const id = props.navigation.getParam("goalId");
  const goalToShow = props.goals.find(goal => goal.key === id);
  return (
    <View style={styles.container}>
      
      <Image
        style={styles.image}
        source={{
          uri:
            "https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_960_720.jpg"
        }}
      />

      <View style={styles.titleDateRow}>
        <Text style={styles.titleDate_title}>{goalToShow.title}</Text>
        <Text style={styles.titleDate_date}>{goalToShow.title}</Text>
      </View>

      <FAB
        style={styles.fab}
        imPressed={() => props.navigation.navigate("Home")}
        iconName="ios-arrow-back"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: "100%",
    height: 300
  },
  titleDateRow: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  titleDate_title: {
    color: "white",
    fontWeight: "bold",
    borderRadius: 5,
    backgroundColor: "grey",
    padding: 10,
    marginHorizontal: 10
  },
  titleDate_date: {
    color: "grey",
    fontWeight: "bold",
    padding: 10,
    marginHorizontal: 10
  }
});

const mapStateToProps = state => {
  return {
    goals: state.GoalsReducer.goalList
  };
};

export default connect(mapStateToProps)(GoalDetailScreen);
