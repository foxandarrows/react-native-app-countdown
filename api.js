
import moment from 'moment';
import Constants from 'expo-constants';

// const { manifest } = Constants;
// const api = manifest.packagerOpts.dev
//   ? manifest.debuggerHost.split(':').shift().concat(':3000')
//   : 'productionurl.com'

// const url = `http://${api}/events`;
const url = 'http://localhost:3000/events';

// abortController = new AbortController();

export function getEvents() {
  return fetch(url)
    // return fetch(url, { signal: this.abortController.signal })
    .then(response => response.json())
    .then(events => events.map(e => ({ ...e, date: new Date(e.date) })))
  // .catch(err => {
  //   // if (err.name === 'AbortError') return
  //   // throw error
  //   console.log('error')
  // })
}

// export function saveEvent({title, date}){
//   re
// }

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
