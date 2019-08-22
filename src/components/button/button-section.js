import React,{useState} from 'react'
import PropTypes from 'prop-types';
import Button from '../button/button';

const Section = (props)=> {
    const codeboxID = "code-box" + props.index;
    // const [codeboxID, setcodeboxID] = useState(false); 
    return (
        <div className="ces-col ces-col-12 code-boxes-col-2-1">
        <section className="code-box" id="components-button-demo-basic" >
            <section className="code-box-demo">
                {props.buttonList.buttons.map((button, ind) => {
                    return (
                        <Button {...button} onClick={props.OnButtonClick}></Button>
                    )
                })}
            </section>
            <section className="code-box-meta markdown">
                <div className="code-box-title"><b >{props.buttonList.type}</b>
                </div>
                <div className="code-box-description">
                    <div>
                        <p>{props.buttonList.message}</p>
                    </div>
                </div>
                <div className="code-box-actions text-center">
                    <i aria-label="icon: snippets" tabindex="-1" className="anticon anticon-snippets code-box-code-copy" onClick={() => props.OnCopyClick(codeboxID)}>
                        <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="snippets" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338zm0-402H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z">
                            </path>
                        </svg>
                    </i>
                    <span className="code-expand-icon">
                        {props.show && <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" className="code-expand-icon-show" onClick={props.OnImageclick}></img>}
                        {!props.show && <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" className="code-expand-icon-show" onClick={props.OnImageclick}></img>}
                    </span>
                </div>
                {
                    props.show &&
                    <div clas="code-box-actions text-left" id={codeboxID}>
                        <pre>import Button from 'cesd';</pre>
                        <div className="padding-l-20">
                            {props.buttonList.buttons.map((button, ind) => {
                                return (
                                    <pre>{`<Button label="${button.label}" outline="${button.shape ? button.shape : ""}" onClick={OnButtonClick}></Button>`}</pre>
                                )
                            })}
                        </div>
                    </div>
                }

            </section>

        </section>
    </div>
    )
}

Section.propTypes = {
    
}

export default Section;
