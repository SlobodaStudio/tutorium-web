const FETCH_EVENTS = 'FETCH_EVENTS';
const initialState = {
  dates: []
};

//Action Creator
export function load(){
  return {
    type: FETCH_EVENTS,
    payload: [
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
  }
}

//Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS:
      return Object.assign({}, state, {
        dates: action.payload
      })
    default:
      return state
  }
}