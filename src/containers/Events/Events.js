import React from 'react';
import { connect } from 'react-redux'
import { List} from 'react-toolbox/lib/list';
import Day from 'components/Day/Day';
import {load} from 'redux/modules/events'
import styles from './Events.scss';

function selector (state){
  return{
    dates: state.events.dates
  };
}

const actions = {loadEvents: load};

class Events extends React.Component {
  constructor(props) {
    super(props);
    props.loadEvents();
  }
  render() {
    return (
      <div className={styles.container__list}>
        <h3>Upcoming Events</h3>
        <List>
          {this.props.dates.map(date =>
            <Day key={date.date} date={date.date} events={date.events} />
          )}
        </List>
      </div>
    );
  }
}

export default connect(selector, actions)(Events)
