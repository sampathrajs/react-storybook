import React from 'react'
import PropTypes from 'prop-types';
import './button.scss';


const Button = ({ label, type, shape, size, block, icon, onClick }) => {
    // ButtonShapes = ('round', 'circle-outline', 'outline');
var buttonType = !!shape ? (shape +'-'+ (!!type ? type : '')) : !!type ? type: '';
    var className = `btn${!!size ? ' ' + size :''}${!!buttonType ? ' ' + buttonType :''}${!!block ? ' ' + block : ''}`
    return (
        <button className={className} 
            type="button" onClick={onClick}>{!!icon && <div className="Button__icon">{icon}</div>}{label && label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
}

export default Button;

