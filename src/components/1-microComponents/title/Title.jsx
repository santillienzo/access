import React from 'react';
import './title.css'

const Title = (props) => {
    return (
        <div className="title-container" >
            <h3 id={props.id}>{props.titleText}</h3>
        </div>
    );
};

export default Title;