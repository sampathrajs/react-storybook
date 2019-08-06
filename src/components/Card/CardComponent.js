import React from 'react'
import PropTypes from 'prop-types';
import './CardComponent.scss';

function CardComponent(props) {
    var className = `card_component ${props.round ? 'card_component-round' : ''}`;
    return (
        <article className={className} style={{ background: props.background, height: props.height, width: props.width }}>
            {props.header && <div className="card_header card-conatiner">{props.header}</div>}
            {props.main && <div className="card_main card-conatiner">{props.main}</div>}
            {props.footer && <div className="card_footer card-conatiner">{props.footer}</div>}
        </article>
    )
}

CardComponent.propTypes = {

}

export default CardComponent

