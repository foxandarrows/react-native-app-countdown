import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import ActionButton from 'react-native-action-button';

import EventCard from './EventCard';

import { getEvents } from './api';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F3F3F3'
  }
})

class EventList extends Component {

  static navigationOptions = {
    title: 'Your Events',
  }

  state = {
    events: []
  }

  componentDidMount() {

    console.log(this.state.events)

    // setInterval(() => {
    this.setState({
      events: this.state.events.map(evt => ({
        ...evt,
        timer: Date.now(),
      })),
    });
    // }, 1000);

    console.log(getEvents())

    getEvents().then(events => this.setState({ events: events }));

    console.log(this.state.events)
  }

  handleAddEvent = () => {
    this.props.navigation.navigate('EventForm');
  }

  render() {
    return [
      <FlatList
        key="flatlist"
        data={this.state.events}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={item => item.id}
        style={styles.list}
      />,
      <ActionButton
        key="fab"
        onPress={this.handleAddEvent}
        buttonColor="rgba(231, 76, 60, 1)"
      />
    ]
  }
}

EventList.defaultProps = {
  events: [],
}

export default EventList;