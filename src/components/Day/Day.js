import React from 'react'
import { List, ListItem, ListSubHeader} from 'react-toolbox/lib/list'
import styles from './Day.scss'

function Day({ dateAndEvents: { date, events } }) {
  return (
    <ListItem key={date} className={"day-сontent"} >
      <List>
        <ListSubHeader caption={date} />
        {events.map((event) =>
          <ListItem key={event} caption={event} className={styles.event} />
        )}
      </List>
    </ListItem>
  );
};

export default Day
