import React from 'react'
import PropTypes from 'prop-types';
import Button from '../button/button';
import './ParentButton.scss';
import {buttons} from '../../common/Constans';

const ParentButton = props => {  


    function OnButtonClick(e) {
        console.log(e);
    };

    return (
        <div className="cards">
            {buttons.map((button,key) => {
                return (
                    <article className="card" key={key.toString()}>                        
                            <h3>{button.header}</h3>
                            <Button {...button.properties} onClick={OnButtonClick}></Button>
                        
                    </article>)
            })}
        </div>
    )
}

ParentButton.propTypes = {

}

export default ParentButton
