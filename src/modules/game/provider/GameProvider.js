import axios from 'axios'

export const getGameById = (gameId) => {
  return new Promise((resolve, reject) => {
    axios.get( process.env.REACT_APP_API_URL + '/api/games/' + gameId)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            console.error(error);
            reject(error)
            //@TODO Implementar manejo de error
        })
  })
}

export const getPlayerByGameId = (gameId) => {
  return new Promise((resolve, reject) => {
    axios.get( process.env.REACT_APP_API_URL + '/api/games/' + gameId + '/player')
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            console.error(error);
            reject(error)
            //@TODO Implementar manejo de error
        })
  })
}

export const getMonsterByGameId = (gameId) => {
  return new Promise((resolve, reject) => {
    axios.get( process.env.REACT_APP_API_URL + '/api/games/' + gameId + '/monster')
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            console.error(error);
            reject(error)
            //@TODO Implementar manejo de error
        })
  })
}

export const getPlayerById = (playerId) => {
  return new Promise((resolve, reject) => {
    axios.get( process.env.REACT_APP_API_URL + '/api/players' + playerId)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            console.error(error);
            reject(error)
            //@TODO Implementar manejo de error
        })
  })
}

export const getMonsterById = (monsterId) => {
  return new Promise((resolve, reject) => {
    axios.get( process.env.REACT_APP_API_URL + '/api/monsters' + monsterId)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            console.error(error);
            reject(error)
            //@TODO Implementar manejo de error
        })
  })
}

export const getCardsByPlayerId = (playerId) => {
  return new Promise((resolve, reject) => {
    axios.get( process.env.REACT_APP_API_URL + '/players/' + playerId + '/cards')
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            console.error(error);
            reject(error)
            //@TODO Implementar manejo de error
        })
  })
}

export const newGame = (name) => {
  return axios.post( process.env.REACT_APP_API_URL+'/api/games',
  {
      name: name,
  });
}

export const nextTurn = (gameId, cardId) => {
  return axios.post( process.env.REACT_APP_API_URL + '/games/' + gameId + '/next-turn',
  {
    card: cardId,
  });
}