import React from 'react';
import ReactDOM from 'react-dom';
import { List, ListItem, ListSubHeader} from 'react-toolbox/lib/list'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Day from '../../../components/Day/Day'

const rootEl = document.createElement('div');
const date = {
                date: "March, 10",
                events: [
                  "Machine learning practice"
                ]
              };

test('can be rendered', () => {
  expect(() => {
    ReactDOM.render(
      <div>
        <Day key={date.date} dateAndEvents={date}/>
      </div>,
      rootEl
    );
  }).not.toThrow();
});

test('renders `ListItem`s', () => {
  const wrapper = shallow(<Day key={date.date} dateAndEvents={date} />);
  expect(wrapper.find('.day-сontent').length).toBe(1);
});

test('Day renders correctly', () => {
  const tree = renderer.create(
    <Day key={date.date} dateAndEvents={date}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
