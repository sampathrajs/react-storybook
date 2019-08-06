import React from 'react'
import PropTypes from 'prop-types';
import './button.scss';


const Button = ({ label, round = false, icon, outline ="", onClick }) => {
    var classname =`btn${ round ? " btn-round " : "" }${!!outline ? " " + outline : ""}`
    return (
        <button className={classname} 
            type="button" onClick={onClick}>{!!icon && <div className="Button__icon">{icon}</div>}{label && label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,

}

export default Button;

