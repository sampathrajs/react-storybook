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

const buttons = [
    {
        header: "Default botton",
        properties: {
            label: "DEFAULT",
            icon: ""
        }
    },
    {
        header: "Round botton",
        properties: {
            label: "ROUND",
            icon: "",
            round: true
        }
    },
    {
        header: "Outline with success botton",
        properties: {
            label: "SUCCESS",
            outline: "btn-success"
        }
    },
    {
        header: "Outline with warn botton",
        properties: {
            label: "WARNING",
            outline: "btn-warning"
        }
    }
    ,{
        header: "Outline with danger botton",
        properties: {
            label: "DANGER",
            outline: "btn-danger"
        }
    }
    ,{
        header: "Outline with info botton",
        properties: {
            label: "INFO",
            outline: "btn-info"
        }
    }
    ,{
        header: "Outline with default botton",
        properties: {
            label: "DEFAULT",
            outline: "btn-default"
        }
    }
];

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

export  {imagesrc,buttons,imageList,progressList} ;
