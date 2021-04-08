import React from 'react';
import GoogleMaps from 'simple-react-google-maps';

import crendentials from '../../config/credentials'
let key = crendentials.mapskey;

const Map = () => {
    let celular = false;

    if (window.screen.width <= 550) {
        celular = true;
    }
    else if(window.screen.width >= 550){
        celular = false;
    }

    return (
        <div>
            {
                celular ? 
                (
                    <GoogleMaps
                        apiKey={key}
                        style={{
                            display: "block",
                            margin:"auto",
                            marginBottom:"25px",
                            position: "relative",
                            height: "450px",
                            width:"250px"
                            }}
                        zoom={11}
                        center={{
                            lat: -33.143122960923655,
                            lng: -68.48505867957421
                        }}
                        markers={[
                            {
                            lat: -33.1960507977805,
                            lng: -68.46413078725658
                            },
                            {
                            lat: -33.143122960923655,
                            lng: -68.48505867957421
                            },
                            {
                            lat: -33.08589562050442,
                            lng: -68.47415517625076
                            }
                        ]}
                    />
                )
                :
                (
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
                        zoom={11}
                        center={{
                            lat: -33.143122960923655,
                            lng: -68.48505867957421
                        }}
                        markers={[
                            {
                            lat: -33.1960507977805,
                            lng: -68.46413078725658
                            },
                            {
                            lat: -33.143122960923655,
                            lng: -68.48505867957421
                            },
                            {
                            lat: -33.08589562050442,
                            lng: -68.47415517625076
                            }
                        ]}
                    />
                )
            }   
            
        </div>
    );
};

// -33.08589562050442, -68.47415517625076
export default Map;