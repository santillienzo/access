import React from 'react';

import './home.css'
import banner from '../../assets/banner.jpg';

const Home = () => {
    return (
        <div className="home">
            <img src={banner}/>
        </div>
    );
};

export default Home;