import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/NotFound';

test('should render Not Found page correctly', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
});