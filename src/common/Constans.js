const imagesrc = {
    lion: require('../assets/lion.jpg')
};
const imageList = [
    {
        header: 'Narmal Image',
        properties: {
            src: imagesrc.lion
        }
    },
    {
        header: 'Round Image',
        properties: {
            src: imagesrc.lion,
            round: true
        }

    }
]

const buttonOutLine = {
    type: "Outline",
    message: "There are default button, dashed button,primary button, danger button and info button",
    buttons: [
    {       
        label: "DEFAULT"        
    },
    {    
        label: "DASHED",            
        shape: "outline",
        type: "dashed"    
    },
    {       
        label: "SUCCESS",
        type: "success",
        shape: "outline"    
    },
    {    
        label: "WARNING",
        type: "warning",
        shape: "outline"    
    }
    ,{       
        label: "DANGER",
        type: "danger",
        shape: "outline"    
    }
    ,{
        label: "INFO",
        type: "info",
        shape: "outline"        
    }
]
}
const buttonShape = {
    type: "Shape",
    message: "There are different types of button shapes",
    buttons: [    
    {    
        label: "DASHED",            
        shape: "circle-outline",
        type: "dashed"    
    },
    {    
        label: "WARNING",
        type: "warning",
        shape: "circle-outline"    
    },
    {    
        label: "R",
        type: "warning",
        shape: "round"    
    }
    ,{       
        label: "DANGER",
        type: "danger",
        shape: "circle-outline"    
    }
    ,{
        label: "INFO",
        type: "info",
        shape: "circle-outline"        
    }
]
}
const buttonBlock = {
    type: "Block",
    message: "Block property will make the button fit to its parent width.",
    buttons: [
    {
       
        label: "SUCCESS",
        type: "success",
        block: "block"    
    },
    {
    
        label: "WARNING",
        type: "warning",
        block: "block"    
    }
    ,{       
        label: "DANGER",
        type: "danger",
        block: "block"
    }
    ,{
        label: "INFO",
        type: "info",
        block: "block"
    }
]
}

const buttonTypes ={
    type: "Types",
    message: "There are default button, dashed button,primary button, danger button and info button",
    buttons: [
    {
       
        label: "DEFAULT"
        
    },
    {
    
        label: "DASHED",
        type: "dashed"    
    },
    {
       
        label: "SUCCESS",
        type: "success",
    
    },
    {
    
        label: "WARNING",
        type: "warning",
    
    }
    ,{       
        label: "DANGER",
        type: "danger",
    
    }
    ,{
        label: "INFO",
        type: "info",
        
    }
]
}

const buttonSize = {
    type: "Size",
    message: "There are LARGE, MEDIUM and SMALL button",
    buttons: [
    {       
        label: "LARGE" ,
        size: "large",
        type: "info",   
    },
    {       
        label: "DEFAULT" ,
        type: "info",           
    },
    {       
        label: "SMALL" ,
        type: "info",
        size: "small"       
    }
    ]
}

const progressList = [
    {
        className: 'successbar',
        props: {
            type: 'success',
            size: 10
        }
    },
    {
        className: 'dangerbar',
        props: {
            type: 'danger',
            size: 20
        }
    },
    {
        className: 'defaultbar',
        props: {
            type: 'default',
            size: 30
        }
    },
    {
        className: 'warningbar',
        props: {
            type: 'warning',
        }
    },
];

export  {imagesrc,buttonTypes,buttonSize,buttonBlock,buttonShape,imageList,progressList,buttonOutLine} ;
