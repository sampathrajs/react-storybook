import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types';
import Button from '../button/button';
import './ParentButton.scss';
import { buttonOutLine,buttonTypes,buttonSize,buttonBlock,buttonShape} from '../../common/Constans';
import Section from './button-section';

const ParentButton = props => {   
    const [show, setShow] = useState(false); 
    var listArray = [buttonOutLine, buttonTypes,buttonSize,buttonBlock,buttonShape];
    function OnButtonClick(e) {
        console.log(e);
    };
    function OnImageclick(e) {
        setShow(!show);
    }
    function OnCopyClick(containerid) {
        var textarea = document.createElement('textarea')
        textarea.id = 'temp_element'
        // Optional step to make less noise on the page, if any!
        textarea.style.height = 0
        // Now append it to your page somewhere, I chose <body>
        document.body.appendChild(textarea)
        // Give our textarea a value of whatever inside the div of id=containerid
        textarea.value = document.getElementById(containerid).innerText
        // Now copy whatever inside the textarea to clipboard
        var selector = document.querySelector('#temp_element')
        selector.select()
        document.execCommand('copy')
        // Remove the textarea
        document.body.removeChild(textarea)
    }

    return (
        <>
            <section className="markdown"><h1>Button</h1></section>
            <div className="ces-row">
                {
                    listArray.map((buttons,index) =>{
                        return (
                        <Section buttonList={buttons} index={index} OnButtonClick={OnButtonClick} show={show} OnImageclick = {OnImageclick} OnCopyClick={OnCopyClick}></Section>
                        )
                    })
                }                
            </div>
        </>
    )
}

ParentButton.propTypes = {

}

export default ParentButton
