import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import ActionButton from "react-native-action-button";

import EventCard from "./EventCard";

// import { getEvents } from "./api";

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#F3F3F3"
  }
});

class EventList extends Component {
  static navigationOptions = {
    title: "Your Events",
    headerTitleStyle: {
      width: 250
    }
  };

  state = {
    events: [
      {
        title: "Interview with a new client",
        date: "2020-01-03T10:00:00.000Z",
        id: "05dafc66-bd91-43a0-a752-4dc40f039144"
      },
      {
        title: "Holidays",
        date: "2020-02-01T19:00:00.000Z",
        id: "001c9b6d-00a9-465c-a2d3-afb7176a0a87"
      },
      {
        title: "Diner with friends",
        date: "2020-01-05T08:09:24.000Z",
        id: "4cdbe78f-54df-4769-bf3b-02a930161ec5"
      },
      {
        title: "Appointment at the dentist",
        date: "2020-02-10T10:09:24.000Z",
        id: "81066e94-5e2a-410a-986c-67dcc72d3a82"
      }
    ]
  };

  componentDidMount() {
    // console.log("state events", this.state.events)
    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now()
        }))
      });
    }, 1000);

    // this.props.navigation.addListener('didFocus', () => {
    // getEvents().then(events => this.setState({ events }));
    // })
  }

  handleAddEvent = () => {
    this.props.navigation.navigate("EventForm");
  };

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
    ];
  }
}

EventList.defaultProps = {
  events: []
};

export default EventList;
