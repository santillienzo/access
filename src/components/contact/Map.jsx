import React from 'react';
import GoogleMaps from 'simple-react-google-maps';

import crendentials from '../../config/credentials'
let key = crendentials.mapskey;

const Map = (props) => {

    const latitud = parseFloat(props.latitud)
    const longitud = parseFloat(props.longitud)

    return (
        <div>
            <GoogleMaps
                apiKey={key}
                style={{
                    display: "block",
                    margin:"auto",
                    marginBottom:"25px",
                    position: "relative",
                    height: "500px",
                    width:"500px"
                    }}
                zoom={15}
                center={{
                    lat: latitud,
                    lng: longitud
                }}
                markers={[
                    {
                    lat: latitud,
                    lng: longitud
                    }
                ]}
            />
        </div>
    );
};

// -33.08589562050442, -68.47415517625076
export default Map;