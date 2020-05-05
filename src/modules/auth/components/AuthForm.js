import React, { useState } from 'react'
import {
    TextField,
    Button,
    Grid,
    InputAdornment
} from '@material-ui/core'
import { Redirect, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

//Action de redux 
import { setAuthAction } from '../store/AuthAction';
import UserIcon from "@material-ui/icons/AccountBox"
import PassIcon from "@material-ui/icons/LockOutlined"
import Alert from '../../layout/alert/Alert'

const AuthForm = (props) => {

    const messages = useSelector(state => state.language.messages); 

    //States del componente
    const [form, setForm] = useState({
        username: '',
        password: '',
    })
    const [authError, setAuthError] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [textError, setTextError] = useState('');
    const [disabledButton, setDisabledButton] = useState(false);

    //utilizar useDispatch y te crea una funcion
    const dispatch = useDispatch();

    const onChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value 
        })
    }

    const handleClick = event => {
        if (disabledButton) {
            return;
        }
        setDisabledButton(true)
    }
    

    const onSubmit = event => {
        handleClick()
        event.preventDefault();

        if ( form.username === "admin" && form.password === "1234" ) {
            setRedirect(true);
            setAuthError(false);
            setTextError(messages.login_error);
            dispatch(setAuthAction(form));
        } else {
            setAuthError(true);
        }
    };
    
    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to='/home'/>
        }
    }

    return (
        
            <div>
                {renderRedirect()}
                <form onSubmit={onSubmit}>
                    {authError &&
                    <Alert content={textError} type={'error'}></Alert>
                   }
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label={messages.auth_form_username}
                        name="username"
                        value={form.username}
                        onChange={onChange}
                        autoComplete="username"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <UserIcon />
                              </InputAdornment>
                            )
                          }}
                    />
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={messages.auth_form_password}
                        type="password"
                        onChange={onChange}
                        value={form.password}
                        id="password"
                        autoComplete="current-password"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PassIcon />
                              </InputAdornment>
                            )
                          }}
                    />
                    <Button
                        type="submit"
                        value="submit"
                        disabled={disabledButton}
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        {messages.auth_form_login}
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link to="/reset-pass" style={{textDecoration: 'none'}}>
                                {messages.auth_form_restore_password}
                            </Link> 
                        </Grid>
                        <Grid item>
                            <Link to="/register" style={{textDecoration: 'none'}}>
                                {messages.auth_form_register}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
                
            </div>
        );
}
 
export default AuthForm;