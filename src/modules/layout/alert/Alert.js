import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Alerts from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'
import {withStyles} from '@material-ui/core/styles'

const useStyles = theme => ({
    alert:{
        padding: theme.spacing(0,0,2,0),
    }
});
class Alert extends Component  {

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.alert}>
            <Alerts severity={this.props.type}>
                {this.props.title ? (<AlertTitle>{this.props.title}</AlertTitle>) : null }
                {this.props.content}
            </Alerts>
            </div>
        );
    }
}

Alert.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['error', 'success','info','warning']).isRequired,
}
export default withStyles(useStyles)(Alert);



