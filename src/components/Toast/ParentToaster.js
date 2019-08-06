import React from 'react';
import ToasterComponent from './ToastComponent';

function ParentToaster() {

const ToasterList = [
    {
        header: 'waring',
        properties: {
            color: 'WARNING',
            text: 'Sample toaster module',
            position: 'toast-right-up'
        }
    },
    {
        header: 'info',
        properties: {
            color: 'INFO',
            text: 'Sample toaster module',
            position: 'toast-right-down'
        }
    },
    {
        header: 'success',
        properties: {
            color: 'SUCCESS',
            text: 'Sample toaster module',
            position: 'toast-left-up'
        }
    },
    {
        header: 'danger',
        properties: {
            color: 'DANGER',
            text: 'Sample toaster module',
            position: 'toast-left-down'
        }
    },
    {
        header: 'default',
        properties: {            
            text: 'Sample toaster module',
            position: 'toast-center'
        }
    }
] 
    return (
        <div >
            {
                ToasterList.map((toaster,key)=>{
                    return(                                        
                            <ToasterComponent {...toaster.properties} key={key.toString()}></ToasterComponent>                        
                    )
                })
            }
        </div>
    )
}

export default ParentToaster
