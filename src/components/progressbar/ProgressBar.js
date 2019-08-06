import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import "./ProgressBar.scss";
import Filter from './Filter';

function ProgressBar(props) {
    const [progress, setprogress] = useState(0);
    const [updateProgress, setUpdateProgress] = useState(true);
    var timeOut;
    useEffect(() => {
       timeOut =  setTimeout(() => {
            if (progress !== 100) {
                if (updateProgress) {
                    setprogress(progress + 10);
                }
            } else {
                // setUpdateProgress(false);    
                clearTimeout(timeOut);           
            }
        }, 500);

        return function cleanup(){
            clearTimeout(timeOut)
        }
    })


    return (
        <div className="progress-bar">
            <Filter percentage={progress} type={props.type} size={props.size === 'undefined' ? 5 : props.size}/>
        </div>
    )
}

ProgressBar.propTypes = {

}

export default ProgressBar;

