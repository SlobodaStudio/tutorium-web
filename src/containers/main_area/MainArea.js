import React from 'react'
import { List, ListItem, ListSubHeader} from 'react-toolbox/lib/list'
import styles from './MainArea.scss'

function Day(props) {
  const listEvents = props.dateAndEvents.events.map((event, index) =>
    <ListItem key={index} caption={event} className={styles.event} />
  );
  return (
    <ListItem key={props.dateAndEvents.date}>
      <List>
        <ListSubHeader caption={props.dateAndEvents.date} />
        {listEvents}
      </List>
    </ListItem>
  );
};

function DaysList(props) {
  const listDays = props.dates.map((aDate) =>
    <Day dateAndEvents={aDate} />
  );
  return (
    <List>
      {listDays}
    </List>
  );
};

class MainArea extends React.Component {
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

export default MainArea
