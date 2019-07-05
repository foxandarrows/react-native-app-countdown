import React from 'react';

import EventList from './EventList';
import EventForm from './EventForm';

import { YellowBox } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

const MainNavigator = createStackNavigator({
  EventList: { screen: EventList },
  EventForm: { screen: EventForm },
});

const App = createAppContainer(MainNavigator);

export default App;
