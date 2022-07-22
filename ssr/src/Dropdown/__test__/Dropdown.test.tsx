import React from 'react';
import {shallow} from "enzyme";
import {Dropdown} from "../Dropdown";
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('Dropdown', () => {
    test('should render', () => {
        const wrapper = shallow(<Dropdown button={<div/>} children={<button/>}/>);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
    })

    test('shold render (snapshot)', () => {
        const wrapper = shallow(<Dropdown button={<div/>} children={<button/>}/>);

        expect(wrapper).toMatchSnapshot();
    })
});
