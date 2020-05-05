import React, { useState } from 'react';
import '../styles/Card.css';
import GameProvider from '../../provider/GameProvider';

const Card = () => {

    const [card, setCard] = useState([])

    GameProvider.nextTurn().then(response => {
        setCard(response.data.card);
    })

    return ( 
        <div className="card">
            {card}
        </div>
    );
}
 
export default Card;