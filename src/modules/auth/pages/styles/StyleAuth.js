import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    card:{
      margin: theme.spacing(4, 0, 4, 0),
    },
    paper: {
      margin: theme.spacing(4, 0 , 2, 0),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: '#ebd834',
    },
    divider:{
        marginTop: theme.spacing(3),
    }
  }));