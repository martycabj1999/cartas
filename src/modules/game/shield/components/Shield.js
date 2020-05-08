import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, Typography, CardContent, CardActions, Button } from '@material-ui/core'

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
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});

const Shield = (props) => {

    const classes = useStyles();

    return ( 
        <Container className={classes.container}>
            <Grid container justify="center" xs={12} sm={8} >
                <Card className={classes.root}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Shield: { props.player.shield }
                    </Typography>   
                </Card>
            </Grid>
        </Container>
    );
}
 
export default Shield;