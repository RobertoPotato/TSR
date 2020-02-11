import React, { useEffect, useState } from "react";
import { View,Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import FAB from "../components/FAB";
import GoalCard from "../components/GoalCard";
import { connect, useDispatch } from "react-redux";
import { removeGoal } from "../../data/action/Goal_p";
import * as goalActions from "../../data/action/Goal_p";

const GoalsScreen = props => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadGoals = async () => {
      setIsLoading(true);
      await dispatch(goalActions.fetchGoals());
      setIsLoading(false);
    };
    loadGoals();
  }, [dispatch]);

  const renderGridItem = itemData => {
    return (
      <GoalCard
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "GoalDetails",
            params: {
              goalId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={80} color="tomato" />
      </View>
    );
  }

  if (!isLoading && props.goals.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No Products Available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.goals}
        renderItem={renderGridItem}
        keyExtractor={item => item.id}
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
