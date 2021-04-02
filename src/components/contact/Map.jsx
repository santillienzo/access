import React from 'react';
import GoogleMaps from 'simple-react-google-maps';

import crendentials from '../../config/credentials'
let key = crendentials.mapskey;

const Map = () => {
    return (
        <div>
            <GoogleMaps
                apiKey={key}
                style={{height: "400px", width:"300px"}}
                zoom={15}
                center={{
                    lat: -33.08589562050442,
                    lng: -68.47415517625076
                }}
                markers={[
                    {
                    lat: -33.08589562050442,
                    lng: -68.47415517625076
                    }
                ]}
            />
        </div>
    );
};

// -33.08589562050442, -68.47415517625076
export default Map;