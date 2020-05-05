import * as http from '../../../services/';

const GameProvider = {

  getGameById: (gameId) => {
    return http.get('games/' + gameId );
  },

  getPlayerByGameId: (gameId) => {
    return http.get('games/' + gameId );
  },

  getMonsterByGameId: (gameId) => {
    return http.get('games/' + gameId );
  },

  getPlayerById: (playerId) => {
    return http.get('players/' + playerId );
  },

  getMonsterById: (monsterId) => {
    return http.get('monsters/' + monsterId );
  },

  getCardsByPlayerId: (playerId) => {
    return http.get('players/' + playerId + '/cards');
  },

  newGame: (name) => {
    const game = new FormData();
    game.append('name', name);
    return http.post('games', game);
  },

  nextTurn: (gameId, card) => {
    const sendCard = new FormData();
    sendCard.append('card', card);
    return http.post('games/' + gameId + '/next-turn', sendCard);
  },

}

export default GameProvider;