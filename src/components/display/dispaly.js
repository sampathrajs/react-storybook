import React from 'react'
import PropTypes from 'prop-types';
import './display.scss';

function DispalyComponent(props) {

    let display = Object.keys(props.basic).map((key)=>  {
        return <div className="container" key={key.toString()}>
           
        <div className="fieldName" >
            <b>{key}</b>
        </div>
        <div className="fieldValue">
            {props.basic[key]}
        </div>
    </div>
    });
    
    return (
        display
    )
}

DispalyComponent.propTypes = {

}

export default DispalyComponent;

