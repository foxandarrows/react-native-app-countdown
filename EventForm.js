import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class EventForm extends Component {

  static navigationOptions = {
    title: 'Add an event',
  }

  handleAddEvent = () => {
    this.props.navigation.navigate('EventList');
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={this.handleAddPress}
        >
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default EventForm;