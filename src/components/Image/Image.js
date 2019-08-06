import React from 'react';
import './image.scss';

const Image = (props) => {   
    const className = props.round ? 'image-round' : '';
    return (
        <img src={props.src} className={className} alt="" style={{ width: "100%", height: "100%" }}/>
    )
}

export default Image;
