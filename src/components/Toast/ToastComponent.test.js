import React from 'react';
import ToastComponent from '../Toast/ToastComponent';
import { shallow } from '../../setupTest';

describe('Toast Component', () => {  
var props = {
    color: "WARNING",
    position: "toast-right-up",
    text: "Sample toaster"
}    
    it('should component', () => {       
        const wrapper = shallow(<ToastComponent {...props}/>)
        expect(wrapper.exists()).toBe(true);
    });
    it('should component contain className "toast-warning"', () => {       
        const wrapper = shallow(<ToastComponent {...props}/>);    
        expect(wrapper.hasClass('toast-warning')).toEqual(true);             
    });

    it('test button click event ', () => {       
        const wrapper = shallow(<ToastComponent {...props} />);
        wrapper.find('button').simulate('click');
        expect(wrapper.hasClass('flex')).toEqual(false);
        expect(wrapper.hasClass('hide')).toEqual(true);
                            
    });
    
});