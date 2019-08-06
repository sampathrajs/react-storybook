import { shallow, mount, render } from '../../setupTest';
import React from 'react';
import Image from '../Image/Image';
import {imagesrc} from '../../common/Constans';

describe('Image Component', () => {
    it('should component', () => { 
        const wrapper = shallow(<Image />)
        expect(wrapper.exists()).toBe(true);
    });        
    
    it('check Component contain "image-round" className', () => {        
        const wrapper = shallow(<Image src= {imagesrc.lion} round={true}/>);      
        expect(wrapper.hasClass('image-round')).toEqual(true); 
    });
});