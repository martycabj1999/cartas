import graphqlClient from "../../../apollo";
import { ClientError } from 'front-module-commons';

class GameProvider {


    getGameById(gameId) {
        return graphqlClient.query({
            query: require('./gql/game.graphql'),
            variables: {gameId},
            fetchPolicy: "network-only"
        })
    }

    getPlayerByGameId(gameId) {
        return graphqlClient.query({
            query: require('./gql/playerByGame.graphql'),
            variables: {gameId},
            fetchPolicy: "network-only"
        })
    }

    getMonsterByGameId(gameId) {
        return graphqlClient.query({
            query: require('./gql/monsterByGame.graphql'),
            variables: {gameId},
            fetchPolicy: "network-only"
        })
    }

    getPlayerById(playerId) {
        return graphqlClient.query({
            query: require('./gql/player.graphql'),
            variables: {playerId},
            fetchPolicy: "network-only"
        })
    }

    getMonsterById(monsterId) {
        return graphqlClient.query({
            query: require('./gql/monster.graphql'),
            variables: {monsterId},
            fetchPolicy: "network-only"
        })
    }

    newGame(name) {
        return new Promise((resolve, reject) => {
                graphqlClient.mutate({
                    mutation: require('./gql/newGame.graphql'),
                    variables: {name}
                }).then(data => {
                    resolve(data)
                }).catch((apolloError) => {
                    let clientError = new ClientError(apolloError)
                    reject(clientError)
                })
            }
        )

    }

    nextTurn(cardId) {
        return new Promise((resolve, reject) => {
                graphqlClient.mutate({
                    mutation: require('./gql/nextTurn.graphql'),
                    variables: {cardId}
                }).then(data => {
                    resolve(data)
                }).catch((apolloError) => {
                    let clientError = new ClientError(apolloError)
                    reject(clientError)
                })
            }
        )

    }

}

export default new GameProvider()
