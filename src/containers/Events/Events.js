import React from 'react'
import { List} from 'react-toolbox/lib/list'
import Day from '../../components/Day/Day'
import styles from './Events.scss'

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
        <List>
          {this.state.dates.map(date =>
            <Day key={date.date} dateAndEvents={date} />
          )}
        </List>
      </div>
    );
  }
}

export default Events
