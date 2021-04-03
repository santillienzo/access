import React from 'react';
import './title.css'

const Title = (props) => {
    return (
        <div className="title-container" id={props.id}>
            <h3>{props.titleText}</h3>
        </div>
    );
};

export default Title;