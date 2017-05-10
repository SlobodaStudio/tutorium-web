import React from 'react'
import { List} from 'react-toolbox/lib/list'
import Day from 'components/Day/Day'
import styles from './Events.scss'

function DaysList(props) {
  return (
    <List>
      {props.dates.map(date =>
        <Day dateAndEvents={date} />
      )}
    </List>
  );
};

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dates: [
        {
          date: "March, 10",
          events: [
            "Machine learning practice"
          ]
        },
        {
          date: "April, 5",
          events: [
            "Ruby vs JavaScript: be quick or be dead",
            "Super Duper JavaScript"
          ]
        }
      ]
    };
  }
  render() {
    return (
      <div className={styles.container__list}>
        <h3>Upcoming Events</h3>
        <DaysList dates={this.state.dates} />
      </div>
    );
  }
}

export default Events
