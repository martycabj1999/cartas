import React, { useState } from 'react'
import Card from '../../card/components/Card'
import '../styles/Board.css'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid} from '@material-ui/core'
import Player from '../../player/components/Player'
import Shield from '../../shield/components/Shield'

const useStyles = makeStyles({
    root: {
      minWidth: 220,
      minHeight: 220,
    },
});

const Board = () => {

    const classes = useStyles();
    const cartas = [1,2,3]

    return ( 
        <Container className="board" >
            <Grid container justify="center" xs={12} sm={8} >
                <Grid className={classes.root} container justify="center" xs={6} sm={6} >
                    <Player />
                </Grid>
                <Grid className={classes.root} container justify="center" xs={6} sm={6} >
                    <Shield />
                </Grid>
                <Grid className={classes.root} container justify="center" xs={6} sm={6} >
                    <Player />
                </Grid>
                <Grid className={classes.root} container justify="center" xs={6} sm={6} >
                    <Shield />
                </Grid>
                {
                    cartas.map((carta) => (
                        <Grid className={classes.root} style={{ margin: 2 }} key={carta} xs={12} sm={3} item>
                            <Card/>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
}
 
export default Board;