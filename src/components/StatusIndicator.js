import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default class FAB extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            ...styles.indicator,
            ...{ backgroundColor: this.props.color }
          }}
        ></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  indicator: {
    position: "absolute",
    width: 10,
    height: 10,
    alignItems: "center",
    justifyContent: "center",
    right: 10,
    top: 10,
    borderRadius: 30,
    elevation: 8,
    borderColor: "white",
    borderWidth: 1.5
  }
});
