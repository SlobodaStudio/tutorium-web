import React from 'react';
import ReactDOM from 'react-dom';
import { List, ListItem, ListSubHeader} from 'react-toolbox/lib/list'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Events from '../../../containers/Events/Events'
import Day from '../../../components/Day/Day'

const rootEl = document.createElement('div');

test('can be rendered', () => {
  expect(() => {
    ReactDOM.render(
      <div>
        <Events />
      </div>,
      rootEl
    );
  }).not.toThrow();
});

test('renders two <Day /> components', () => {
  const wrapper = shallow(<Events />);
  expect(wrapper.find(Day).length).toBe(2);
});

test('Events renders correctly', () => {
  const tree = renderer.create(
    <Events />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
