import React from 'react'

function Day(props) {
  const listEvents = props.dateAndEvents.events.map((event, index) =>
    <li key={index}>{event}</li>
  );
  return (
    <li key={props.dateAndEvents.date}>
      <h2>{props.dateAndEvents.date}</h2>
      <ul>{listEvents}</ul>
    </li>
  );
};

function DaysList(props) {
  const listDays = props.dates.map((aDate) =>
    <Day dateAndEvents={aDate} />
  );
  return (
    <ul className="event-list">
      {listDays}
    </ul>
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
      // <h1>Upcoming Events</h1>
      <DaysList dates={this.state.dates} />
    );
  }
}

export default MainArea
