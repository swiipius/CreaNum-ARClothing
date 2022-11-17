import React from 'react';
import Popup from "./popup";
import { useState } from 'react';
import "./card.css";

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../image/', false, /\.(png|jpe?g|svg)$/));

console.log(images)

function Card(props) {
    const [buttonPopup, setButtonpopup] = useState(false);

    return (
        <div className="card">
            {/* A faire pour changer image via argument dans le code App */}
            {/* <div className="card-content" style={{ backgroundImage: 'url(' + require('../image/arkit.png') + ')' }}> */}
            <div className="card-content">
                <button value="" onClick={() => setButtonpopup(true)}>{props.name}</button>
                <img src={images[props.image]} alt={props.name} />
                <Popup trigger={buttonPopup} setTrigger={setButtonpopup}>
                    <div class="item1"></div>
                    <div class="item2">{props.name}</div>
                    <div class="item3">{props.size}</div>
                    <div class="item4">{props.description}</div>
                </Popup>
            </div>
        </div >
    );
};

export default Card;
