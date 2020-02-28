/*
SAMPLE USAGE: <FAB style={styles.fab} imPressed={() => props.navigation.navigate("Home")} iconName="ios-arrow-back"/>
PARENT VIEW (Page Container): style => 
container: {
    flex: 1
  }
MUST BE THE LAST CHILD OF THE MAIN VIEW
DO NOT contain in a scrollview
*/

import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class FAB extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.imPressed}
          style={styles.fab}
        >
          <Ionicons name={this.props.iconName} size={40} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fab: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#007BA7",
    borderRadius: 30,
    elevation: 8
  },
  fabIcon: {
    fontSize: 40,
    color: "white"
  }
});
