import React from 'react';
import './ParentProgressbar.scss';
import ProgressBar from './ProgressBar';
import {progressList} from '../../common/Constans';

const ParenProgressbar = () => {
    
    return (
        <div className="main">
            {
                progressList.map((progress,key) => {
                    return (
                        <div className={progress.className} key={key.toString()}>
                            <ProgressBar {...progress.props}></ProgressBar>
                        </div>)
                })
            }
        </div>
    )
}

export default ParenProgressbar;
