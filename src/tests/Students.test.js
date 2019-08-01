import React from 'react';
import {shallow} from "enzyme";
import Students from "../components/Students/Students";

describe('student details', () => {

  it('should render without crashing', () => {
    const wrapper = shallow(<Students />);
    wrapper.setState({students: [{}]});
    expect(wrapper.find('.students').length).toEqual(1);
    expect(wrapper.find('.student-name').length).toEqual(1);
  });

  it('should not render when no students are present', () => {
    const wrapper = shallow(<Students />);
    wrapper.setState({students: []});
    expect(wrapper.find('.students').length).toEqual(0);
  });

});
