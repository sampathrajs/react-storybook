import React from 'react'
import PropTypes from 'prop-types';
import './Detail.scss';

function DetailComponent(props) {
    return (
        <div className="wrapper" style={{color: !!props.color && props.color}}>
            <header className="wrapper-page-header" style={{backgroundColor: !!props.headerbgcolor && props.headerbgcolor}}>{props.header}</header>
            <main className="wrapper-page-main" style={{backgroundColor: !!props.mainbgcolor && props.mainbgcolor}}>
            <p >{props.content}</p>
            </main>
        </div>
    )
}

DetailComponent.propTypes = {

}

export default DetailComponent;

