import React,{Fragment} from 'react'
import PropTypes from 'prop-types';
import CardComponent from './CardComponent';
import './ParentCard.scss';
import Image from '../Image/Image';
import {imagesrc} from '../../common/Constans';

const ParentCard = props => {   
  const  image= {
        src: imagesrc.lion,        
    }   
    return (
        <div className="parent_cards">            
            <CardComponent background="lightskyblue" width="5%" height="100px" round={true} ></CardComponent>
            <CardComponent background="lightskyblue" width="200px" height="200px"></CardComponent>
            <CardComponent background="lightskyblue" width="20%" height="400px"  round={true} header="SIMBA" main={<Image {...image}></Image>} footer="The Lion King"></CardComponent>
        </div>
    )
}

ParentCard.propTypes = {

}

export default ParentCard;
