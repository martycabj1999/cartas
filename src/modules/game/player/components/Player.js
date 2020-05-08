import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, Typography, CardContent, Avatar } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
      minWidth: 200,
      minHeight: 200,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 25,
    },
    pos: {
      marginBottom: 12,
    },
});

const Player = (props) => {

    const classes = useStyles();
    
    return ( 
        <Container>
            <Grid container justify="center" xs={12} sm={8} >
                <Card className={classes.root}>
                    <CardContent>
                        <Avatar alt="Remy Sharp" src={props.player.image ? props.player.image : null } className={classes.large} />
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            { props.player.name }
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            { props.player.hp } / { props.player.maxHp }
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    );
}
 
export default Player;