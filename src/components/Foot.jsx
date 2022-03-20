// src/components/Foot.js
import React from "react";
import { Link } from 'react-router-dom';

export default function Foot() {
    return (
        <>

        <div className="foot-container">
            <div className="curved-foot">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 40"><path stroke="null" id="svg_1" d="m0,25.5l120,4.26328c120,4.10391 360,12.86953 600,8.48672c240,-4.38281 480,-21.11719 600,-29.76328l120,-8.48672l0,102l-120,0c-120,0 -360,0 -600,0c-240,0 -480,0 -600,0l-120,0l0,-76.5z" /></svg>       
            </div>
            <div className="foot">
                <span>Website designed in Adobe xD and created with React.js</span>
            </div>        




        </div>
        </>
    );
}
