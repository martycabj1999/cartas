import React, { useState, useEffect } from 'react'
import Card from '../../card/components/Card'
import '../styles/Board.css'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid} from '@material-ui/core'
import Player from '../../player/components/Player'
import Shield from '../../shield/components/Shield'
import { getPlayerByGameId, getMonsterByGameId, getCardsByPlayerId } from '../../provider/GameProvider';

const useStyles = makeStyles({
    root: {
      minWidth: 220,
      minHeight: 220,
    },
});

const Board = () => {

    const classes = useStyles();
    const [player, setPlayer] = useState({})
    const [monster, setMonster] = useState({})
    const [card1, setCard1] = useState({})
    const [card2, setCard2] = useState({})
    const [card3, setCard3] = useState({})

    let game = JSON.parse(localStorage.getItem('game'))

    useEffect(() => {
        fetchCards()
        fetchPlayer()
        fetchMonster()
    }, [])

    const fetchPlayer = async () => {
        await getPlayerByGameId(game.id).then( response => {
            setPlayer(response);
            localStorage.setItem('player', JSON.stringify(response))
        });
    }

    const fetchMonster = async () => {
        await getMonsterByGameId(game.id).then( response => {
            setMonster(response);
        });
    }

    const fetchCards = async () => {
        let pl = JSON.parse(localStorage.getItem('player'))
        await getCardsByPlayerId(pl.id).then( response => {
            setCard1(response[0]);
            setCard2(response[1]);
            setCard3(response[2]);
        });
    }

    return ( 
        <Container className="board" >
            <Grid container justify="center" xs={12} sm={10} >
                <Grid className={classes.root} container justify="center" xs={6} sm={6} >
                    { <Player player={player} /> }
                </Grid>
                <Grid className={classes.root} container justify="center" xs={6} sm={6} >
                    <Shield player={player} />
                </Grid>
                <Grid className={classes.root} container justify="center" xs={6} sm={6} >
                    <Player player={monster} />
                </Grid>
                <Grid className={classes.root} container justify="center" xs={6} sm={6} >
                    <Shield player={monster} />
                </Grid>
                <Grid className={classes.root} style={{ margin: 2 }} xs={12} sm={3} item>
                    <Card card={card1} />
                </Grid>
                <Grid className={classes.root} style={{ margin: 2 }} xs={12} sm={3} item>
                    <Card card={card2} />
                </Grid>
                <Grid className={classes.root} style={{ margin: 2 }} xs={12} sm={3} item>
                    <Card card={card3} />
                </Grid>
            </Grid>
        </Container>
    );
}
 
export default Board;