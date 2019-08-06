import React from 'react'
import PropTypes from 'prop-types';
import './Info.scss';
import DetailComponent from '../Detail/Detail';
import Image from '../Image/Image';
import DispalyComponent from '../display/dispaly';


const InfoComponent = props => {        
    return (  
        <div className="container">
            <div className="left">
                <div className="profile-Image">
                <Image src={props.person.profileImage} round = {true}></Image>
                </div>
                <br/>
                <div className="profile-detail">
                    <DispalyComponent basic = {props.person.basicInfo}></DispalyComponent>
                </div>
            </div>
            <div className="right">
            {(() => {
        const rows = [];
        for (let i = 0; i < 5; i++) {
          rows.push(<DetailComponent  {...props.person.detail} key={i.toString()}/>);
        }
        return rows;
      })()}
            </div>
        </div>
    )
}

InfoComponent.propTypes = {

}

export default InfoComponent
