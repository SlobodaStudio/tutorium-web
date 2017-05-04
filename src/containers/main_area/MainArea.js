import React from 'react'

class MainArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: {
        1: {
          date: "March, 10",
          events: {
            1: "Event 1",
          }
        },
        2: {
          date: "April, 5",
          events: {
            1: "Event 1",
            2: "Event 2"
          }
        }
      }
    };
  }
  render() {
    return (
      <div className="event-list">
        <h1>Upcoming Events</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
  }
}

export default MainArea
