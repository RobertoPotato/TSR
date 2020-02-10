import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { addGoal } from "../../data/action/Goal_p";

class NewGoalScreen extends Component {
  state = {
    title: ""
  };

  handleTitle = text => {
    this.setState({ title: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.title}</Text>
        <TextInput
          style={styles.textInput}
          placeholder="What's your goal?"
          autoCapitalize="none"
          onChangeText={this.handleTitle}
        />
        <TouchableOpacity
          style={styles.btnSubmit}
          title="Submit"
          onPress={() => this.props.add(this.state.title)}
        >
          <Text style={styles.btnText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 20
  },
  textInput: {
    margin: 10,
    height: 40,
    width: "90%",
    borderColor: "#cfcfcf",
    borderWidth: 1,
    borderRadius: 5
  },
  btnSubmit: {
    backgroundColor: "#77DD77",
    padding: 10,
    margin: 15,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});

const mapStateToProps = state => {
  return {
    goals: state.GoalsReducer.goalList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: (goal) => dispatch(addGoal(goal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGoalScreen);
