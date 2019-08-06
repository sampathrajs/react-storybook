import React,{useState,Fragment} from 'react'
import PropTypes from 'prop-types';
import './Input.scss';

function InputComponent(props) {
const [value,setvalue] = useState(props.value);
var className;
if(props.type == "text"){
    className = "input-text"
}else if(props.type == "checkbox"){
    className = "input-checkbox"
}

    return (
        <Fragment>
        <input className={className} type={props.type} value={value} onChange={ (e)=>{setvalue(e.target.value)}}/>
        {props.type == "text" ?"": <label class="label">Spectacles</label>}
        </Fragment>
    )
}

InputComponent.propTypes = {

}

export default InputComponent;

