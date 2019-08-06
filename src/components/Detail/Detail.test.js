import React from 'react';
import Detail from '../Detail/Detail';
import { shallow } from '../../setupTest';

describe('Button Component', () => {  
    var details = {
        header: "Sampath Raj",
        headerbgcolor: "#fa8072",
        mainbgcolor: "#f4a460",
        content: "Now we will work on navigating next and previous images. We can navigate images of Yesterday and the day before Yesterday from the initial date Now we will work on navigating next and previous images. We can navigate images of Yesterday and the day before Yesterday from the initial dateNow we will work on navigating next and previous images. We can navigate images of Yesterday and the day before Yesterday from the initial date "
    }  
    it('should component', () => {       
        const wrapper = shallow(<Detail {...details}/>)
        expect(wrapper.exists()).toBe(true);
    });    
   
    
});