import React from 'react';
import Button from '../button/button';
import { shallow } from '../../setupTest';

describe('Button Component', () => {
    const props = {
        label: "Submit",
    }
    it('should component', () => {       
        const wrapper = shallow(<Button {...props} />)
        expect(wrapper.exists()).toBe(true);
    });
    it('should props contain className "btn"', () => {       
        const wrapper = shallow(<Button onClick {...props} />);
        expect(wrapper.props().className).toEqual('btn');        
    });

    it('should component contain button with name Submit', () => {      
        const wrapper = shallow(<Button {...props} />) 
        expect(wrapper.find('button').text()).toEqual('Submit')
    });
    
});


