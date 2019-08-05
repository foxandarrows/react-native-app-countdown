
import moment from 'moment';
import Constants from 'expo-constants';
import uuid from 'uuid';

const { manifest } = Constants;
console.log(Constants);

/*
  (While in dev (local))
  Replace API_HOST by your ip:
  - Open a terminal
  - Type:
      ip addr show
  - Look for your wifi interface (likely wlp1s0 or whatever...)
  - Copy the IP in `inet` section. (XXX.YYY.ZZZ.AAA, without the /24 part)
      eg. 192.168.1.42
  - ???
  - PROFIT!!!1!!1oneone!

  Don't forget to keep all devices on the same network (wifi, don't use ).
*/
const API_HOST = '192.168.5.112';
const url = `http://${API_HOST}:3000/events`;

export function getEvents() {
  console.log('#getEvents');
  console.log(url);
  return fetch(url)
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(events => {
      console.log(events);
      return events.map(e => ({ ...e, date: new Date(e.date) }))
    })
    .catch(e => console.error(e))
}

export function saveEvent({ title, date }) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      title,
      date,
      id: uuid(),
    }),
    headers: new Headers({
      'Content-Type': 'application/json',
    })
  })
    .then(res => res.json())
    .catch(err => console.error(err));
}

export function formatDate(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format('D MMM YYYY');
}

export function getCountdownParts(eventDate) {
  const duration = moment.duration(moment(new Date(eventDate)).diff(new Date()));
  return {
    days: parseInt(duration.as('days')),
    hours: duration.get('hours'),
    minutes: duration.get('minutes'),
    seconds: duration.get('seconds'),
  };
}
