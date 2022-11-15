import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./card.css";

const Card = (props) => {

    function openCard() {
        <Popup trigger={<button> Trigger</button>} position="right center">
            <div>Popup content here !!</div>
        </Popup>
    }

    return (
        <div className="card">
            {/* A faire pour changer image via argument dans le code App */}
            {/* <div className="card-content" style={{ backgroundImage: 'url(' + require('../image/arkit.png') + ')' }}> */}
            <div className="card-content">
                <input type="button" value="" onClick={openCard} />
            </div>
        </div >
    );
};

export default Card;
