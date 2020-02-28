import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";

const GoalCard = props => {
  return (
    <View style={styles.cardBody}>
      <TouchableOpacity onPress={props.onSelect}>
        <ImageBackground style={styles.bgImage} source={{ uri: props.image }}>
          <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBody: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 5,
    overflow: "hidden"
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center"
  }
});

export default GoalCard;
