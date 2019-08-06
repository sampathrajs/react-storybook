import React from 'react'
import PropTypes from 'prop-types';
import './Filter.scss';

function Filter(props) {     
    return (
        <div className={`filter ${props.type}`} style={{width: `${props.percentage}%`,height: props.size}}>
            
        </div>
    )
}

Filter.propTypes = {

}

export default Filter;

