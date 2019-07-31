import React from 'react';
import {shallow} from "enzyme";
import {StudentDetails} from "../components/StudentDetails/StudentDetails";

it('should render without crashing', () => {
  const wrapper = shallow(<StudentDetails />);
  expect(wrapper.find('.student-details').length).toEqual(1);
});
