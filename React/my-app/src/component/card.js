import React from 'react';
import Popup from ".//popup";
import { useState } from 'react';
import "./card.css";

function Card(props) {
    const [buttonPopup, setButtonpopup] = useState(false);

    return (
        <div className="card">
            {/* A faire pour changer image via argument dans le code App */}
            {/* <div className="card-content" style={{ backgroundImage: 'url(' + require('../image/arkit.png') + ')' }}> */}
            <div className="card-content">
                <button value="" onClick={() => setButtonpopup(true)}>{props.name}</button>
                <Popup trigger={buttonPopup} setTrigger={setButtonpopup}>
                    <h3>Hello nite</h3>
                </Popup>
            </div>
        </div >
    );
};

export default Card;
