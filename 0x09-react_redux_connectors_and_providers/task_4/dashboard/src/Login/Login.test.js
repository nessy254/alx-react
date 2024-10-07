import React from 'react';
import { shallow } from 'enzyme';

import Login from "./Login";

describe('<Login />', () => {
  it('renders without crashing', () => {
    shallow(<Login/>);
  });

  it('renders the input and label tag items', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });
  
  });
