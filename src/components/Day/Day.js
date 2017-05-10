import React from 'react'
import { List, ListItem, ListSubHeader} from 'react-toolbox/lib/list'
import styles from './Day.scss'

function Day(props) {
  return (
    <ListItem key={props.dateAndEvents.date}>
      <List>
        <ListSubHeader caption={props.dateAndEvents.date} />
        {props.dateAndEvents.events.map((event) =>
          <ListItem key={event} caption={event} className={styles.event} />
        )}
      </List>
    </ListItem>
  );
};

export default Day
