import React, { useState, useEffect } from 'react';
import '../styles/Card.css';
import { getCardsByPlayerId } from '../../provider/GameProvider';

const Card = (props) => {
    let playerId = 1
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetchCards()
    }, [])

    const fetchCards = () => {
        getCardsByPlayerId(playerId).then( response => {
            setCards(response.data);
        });
    }

    return ( 
        <div className="card">
            {cards.map((card) => (
                <div>
                    {"card"}
                </div>
            ))}
        </div>
    );
}
 
export default Card;