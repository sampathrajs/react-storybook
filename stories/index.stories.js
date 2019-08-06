import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ParentImage from '../src/components/Image/ParentImage';
import DetailComponent from '../src/components/Detail/Detail';
import InfoComponent from '../src/components/Info/InfoComponent';
import DispalyComponent from '../src/components/display/dispaly';
import ParentToaster from '../src/components/Toast/ParentToaster';
import InputComponent from '../src/components/Input/InputComponent';
import ParentButton from '../src/components/button/ParentButton';
import ParenProgressbar from '../src/components/progressbar/ParenProgressbar';
import ParentCard from '../src/components/Card/ParentCard';
import Model from '../src/components/Model/Model';
import {imagesrc} from '../src/common/Constans';

const basicInfo = {
    name: "Sampath",
    age: 25,   
    address: "22 Rue du Grenier Saint-Lazare,75003,Paris,FRA,France 22 Rue du Grenier Saint-Lazare,75003,Paris,FRA,France",
    degree: "MCA",
};

var details = {
    header: "Sampath Raj",
    headerbgcolor: "#fa8072",
    mainbgcolor: "#f4a460",
    content: "Now we will work on navigating next and previous images. We can navigate images of Yesterday and the day before Yesterday from the initial date Now we will work on navigating next and previous images. We can navigate images of Yesterday and the day before Yesterday from the initial dateNow we will work on navigating next and previous images. We can navigate images of Yesterday and the day before Yesterday from the initial date "
}    

var person = {
    detail: details,
    basicInfo : basicInfo,
    profileImage: imagesrc.lion
}

// Button component
storiesOf('Button', module).add('Buttons',()=> <ParentButton ></ParentButton>);
// Image Component
storiesOf('Image', module).add('Images',()=> <ParentImage ></ParentImage>);
// Detail Component
storiesOf('Detail', module).add('Detail Model',()=> <DetailComponent {...details}></DetailComponent>);
// Display Component
storiesOf('Display', module).add('Display Info',()=> <DispalyComponent basic={basicInfo}></DispalyComponent>);
// Info Component
storiesOf('Layout', module).add('Flex layout',()=> <InfoComponent person={person}></InfoComponent>);
// Toast Component
storiesOf('Toast', module).add('toasters',()=> <ParentToaster ></ParentToaster>);
// Progress bar component
storiesOf('Progress bar', module).add('Parent',()=> <ParenProgressbar ></ParenProgressbar>);
// Card Component
storiesOf('Card', module).add('card',()=> <ParentCard ></ParentCard>);
// Model Component
storiesOf('Model', module).add('Model',()=> <Model ></Model>);


// // Input Component
// storiesOf('Input', module).add('text box',()=> <InputComponent type="text" value="test"></InputComponent>);
// storiesOf('Input', module).add('check box',()=> <InputComponent type="checkbox" value="test"></InputComponent>);
// storiesOf('Input', module).add('radio box',()=> <InputComponent type="radio" value="test"></InputComponent>);
