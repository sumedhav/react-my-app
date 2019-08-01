import React from 'react';
import {shallow} from "enzyme";
import {StudentDetails} from "../components/StudentDetails/StudentDetails";

describe('student details', () => {

  it('should render without crashing', () => {
    const wrapper = shallow(<StudentDetails />);
    expect(wrapper.find('.student-details').length).toEqual(1);
  });

  it('should display text properly', () => {
    const wrapper = shallow(<StudentDetails name="batman" studentClass="Gotham" section="Vigilante"/>);
    expect(wrapper.find('.student-details').text()).toEqual("batman Gotham-Vigilante");
  });
});
