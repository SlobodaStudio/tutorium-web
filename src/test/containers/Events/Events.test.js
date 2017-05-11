import React from 'react';
import ReactDOM from 'react-dom';
import { List, ListItem, ListSubHeader} from 'react-toolbox/lib/list'
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Events from '../../../containers/Events/Events'
import Day from '../../../components/Day/Day'

const rootEl = document.createElement('div');

ReactDOM.render(
   <div>
      <Events />
   </div>,
  rootEl
);

describe('<Events />', () => {
  it('renders two <Day /> components', () => {
    const wrapper = shallow(<Events />);
    expect(wrapper.find(Day)).to.have.length(2);
  });

  it('renders `ListItem`s', () => {
    const wrapper = shallow(<Events />);
    expect(wrapper.find(ListItem)).exists;
  });
});
