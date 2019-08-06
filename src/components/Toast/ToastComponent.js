import React,{useState,useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import './ToastComponent.scss';


const ToastComponent = props => {  
    var colorclass ;
    const [display, setDispay] = useState('flex');
    switch (props.color) {
        case "WARNING":
            colorclass= "toast-warning";
            break;
        case "INFO":
            colorclass=  "toast-info";
            break;
        case "SUCCESS":
            colorclass= "toast-success";
            break;
        case "DANGER":
            colorclass= "toast-danger";
            break;           
    
        default:
            colorclass= "toast-default";
            break;
    }

    useEffect(()=>{
      var timeout =  setTimeout(()=>{setDispay("hide")},10000);
      return clearImmediate(timeout);
    });

    var classname = `toast ${!props.position ? "" : props.position} ${colorclass} ${display === "flex" ? "flex" : "hide"}`;
    
    return (              
            <li className={classname}>                
                <p className="toast__content">
                    {props.text}
                </p>
                <button className="toast__dismiss" onClick={() =>  setDispay("hide")}>x</button>                             
            </li>
    )
}

ToastComponent.propTypes = {
    color: PropTypes.string,
    onDismissClick: PropTypes.func,
    text: PropTypes.string.isRequired
}

export default ToastComponent

