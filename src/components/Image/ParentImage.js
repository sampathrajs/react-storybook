import React from 'react';
import Image from './Image';
import {imageList} from '../../common/Constans';
import './ParentImage.scss';

export default function ParentImage() {    

    return (
        <div className="cards">
            {
                imageList.map((image,key) => {
                    return (
                        <article className="card" key={key.toString()}>                            
                            <Image {...image.properties}></Image>
                        </article>
                    )
                })
            }
        </div>
    )
}
