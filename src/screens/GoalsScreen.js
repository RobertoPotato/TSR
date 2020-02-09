import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import FAB from "../components/FAB";
import GoalCard from "../components/GoalCard";
import { dummyGoal } from "../../data/DummyData";

const GoalsScreen = props => {
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
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyGoal}
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

export default GoalsScreen;
