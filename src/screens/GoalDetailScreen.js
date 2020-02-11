import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import FAB from "../components/FAB";
import { connect } from "react-redux";

const GoalDetailScreen = props => {
  const id = props.navigation.getParam("goalId");
  const goalToShow = props.goals.find(goal => goal.id === id);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: goalToShow.imageUrl }} />

      <View style={styles.titleDateRow}>
        <Text style={styles.titleDate_title}>{goalToShow.title}</Text>
        <Text style={styles.titleDate_date}>{goalToShow.imageUrl}</Text>
      </View>

      <FAB
        style={styles.fab}
        imPressed={() => props.navigation.navigate("Home")}
        iconName="md-create"
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
