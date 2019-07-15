import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white'
  },
  text: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10,
  }
})

class EventForm extends Component {

  state = {
    title: null,
  }

  static navigationOptions = {
    title: 'Add an event',
  }

  handleAddEvent = () => {
    console.log(this.state);
    this.props.navigation.navigate('EventList');
  }

  handleChangeTitle = (value) => {
    this.setState({
      title: value
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#E7E3E3'
        }}>
        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.text}
            placeholder="Event title"
            spellCheck={false}
            value={this.state.title}
            onChangeText={this.handleChangeTitle}
          />
        </View>
        <TouchableHighlight
          onPress={this.handleAddEvent}
        >
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default EventForm;