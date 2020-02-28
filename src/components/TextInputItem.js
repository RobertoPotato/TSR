import React, { Component } from "react";
import { TextInput, View, StyleSheet } from "react-native";

class TextInputItem extends Component {

  render() {
    return (
      <View>
        <TextInput
          {...this.props}
          autoCorrect={false}
          style={styles.textInput}
          placeholder={this.props.placeholder}
          autoCapitalize="none"
          onChangeText={this.props.handleInput}
          clearButtonMode="always"
          underlineColorAndroid="transparent"
          multiline={this.props.multiline}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    minWidth: "90%",
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: "#666",
    color: "#ffffff",
    borderRadius: 5
  }
});

export default TextInputItem;
