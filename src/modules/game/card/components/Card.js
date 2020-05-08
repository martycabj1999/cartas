import React from 'react';
import '../styles/Card.css';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core'

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

const Card = (props) => {
    
    const currentColors = useSelector(state => state.customization.colors);
    const classes = useStyles();

    return ( 
        
        <div className={classes.root} style={{ backgroundColor: currentColors.colorPrimary }} >
            <Typography className={classes.title} color="textSecondary" gutterBottom>{props.card.effect}</Typography>   
            <Typography className={classes.title} color="textSecondary" gutterBottom>{props.card.value}</Typography>   
            <Button>Usar</Button>
        </div>
    );
}
 
export default Card;