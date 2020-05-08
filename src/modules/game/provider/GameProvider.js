import axios from 'axios'

const headers = {
  'Content-Type': 'application/json',
}

export const getGameById = (gameId) => {
  return new Promise((resolve, reject) => {
    axios.get( process.env.REACT_APP_API_URL + '/api/games/' + gameId, { headers })
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
  console.log(gameId)
  return new Promise((resolve, reject) => {
    axios.get( process.env.REACT_APP_API_URL + '/api/games/' + gameId + '/player', { headers })
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
    axios.get( process.env.REACT_APP_API_URL + '/api/games/' + gameId + '/monster', { headers })
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
    axios.get( process.env.REACT_APP_API_URL + '/api/players' + playerId, { headers })
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
    axios.get( process.env.REACT_APP_API_URL + '/api/monsters' + monsterId , { headers })
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
    axios.get( process.env.REACT_APP_API_URL + '/api/players/' + playerId + '/cards', { headers })
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

export const newGame = (form) => {
  return new Promise((resolve, reject) => {
    axios.post(process.env.REACT_APP_API_URL + '/api/games',form, { headers })
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        });
    })
}

export const nextTurn = (form) => {
  //gameId, cardId
  return new Promise((resolve, reject) => {
    axios.post(process.env.REACT_APP_API_URL + '/api/games/' + form.gameId + '/next-turn',
      form, 
      { headers })
                  .then((response) => {
                      resolve(response.data);
                  })
                  .catch((error) => {
                      reject(error);
                  });
    })
}