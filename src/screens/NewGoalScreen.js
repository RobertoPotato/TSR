import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { addGoal } from "../../data/action/Goal_p";
import TextInputItem from "../components/TextInputItem";

class NewGoalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      link: "",
      activeOrComplete: "active",
      createdDate: new Date().getDate,
      completedDate: "",
      description: ""
    };
  }

  //TODO create methods for the above inputs
  handleTitle = text => {
    this.setState({ title: text });
  };

  handleLink = text => {
    this.setState({ link: text });
  };

  handleDescription = text => {
    this.setState({ description: text });
  };

  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    that.setState({
      //Setting the value of the date time
      date: date + "/" + month + "/" + year
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>The date is: {this.state.date} </Text>
        <Text>{this.state.title}</Text>
        <TextInputItem
          placeholder="What's your new goal?"
          handleInput={this.handleTitle}
        />
        <Text>{this.state.link}</Text>
        <TextInputItem
          placeholder="Paste Link?"
          handleInput={this.handleLink}
        />
        <TextInputItem
          placeholder="Describe your goal"
          handleInput={this.handleDescription}
          multiline={true}

        />
        <TouchableOpacity
          style={styles.btnSubmit}
          title="Submit"
          onPress={() =>
            this.props.add(
              this.state.title,
              this.state.link,
              this.state.date,
              this.state.activeOrComplete,
              this.state.completedDate,
              this.state.description
            )
          }
        >
          <Text style={styles.btnText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    goals: state.GoalsReducer.goalList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: (
      title,
      link,
      createdDate,
      activeOrComplete,
      completedDate,
      description
    ) =>
      dispatch(
        addGoal(
          title,
          link,
          createdDate,
          activeOrComplete,
          completedDate,
          description
        )
      )
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(NewGoalScreen);
