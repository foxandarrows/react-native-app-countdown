import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import EventCard from './EventCard';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F3F3F3'
  }
})

class EventList extends Component {
  state = {
    events: []
  }

  componentDidMount() {

    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now(),
        })),
      });
    }, 1000);

    const events = require('./db.json').events.map(e => ({
      ...e,
      date: new Date(e.date)
    }));
    this.setState({ events });
  }

  render() {
    return (
      <FlatList
        data={this.state.events}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    )
  }
}

export default EventList;