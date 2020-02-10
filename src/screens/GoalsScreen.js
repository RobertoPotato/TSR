import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import FAB from "../components/FAB";
import GoalCard from "../components/GoalCard";
import { connect } from "react-redux";
import { removeGoal } from "../../data/action/Goal_p";

const GoalsScreen = props => {
  //NOTE cons
//  console.log(props.goals)
  const renderGridItem = itemData => {
    return (
      <GoalCard
        title={itemData.item.title}
        image={itemData.item.link}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "GoalDetails",
            params: {
              goalId: itemData.item.key
            }
          });
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={props.goals}
        renderItem={renderGridItem}
        keyExtractor={item => item.key}
        numColumns={2}
      />

      <FAB
        imPressed={() => props.navigation.navigate("New")}
        iconName="ios-add"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = state => {
  return {
    goals: state.GoalsReducer.goalList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: () => dispatch(removeGoal(key))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalsScreen);
