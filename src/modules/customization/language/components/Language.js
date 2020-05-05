import React, { useState, Fragment } from 'react'
import { FormControl, Button, Grid, Select, InputLabel, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import SaveIcon from '@material-ui/icons/Save';

//Action de redux 
import { setLanguageAction } from '../store/LanguageAction';
import { messagesSpanish, messagesEnglish, messagesPortuguese } from '../messages';

const useStyles = makeStyles(theme => ({

    title: {
        fontSize: 24,
    },
    formControl: {
        minWidth: 200,
        //margin: theme.spacing(5),

    },
    button: {
        [theme.breakpoints.down('xs')]:{
            marginTop: theme.spacing(2),
          }
    }

}));

const Language = () => {

    const classes = useStyles();
    const currentLanguage = useSelector(state => state.language.language);
    const messages = useSelector(state => state.language.messages);
    const [language, setLanguage] = useState(currentLanguage);

    //utilizar useDispatch y te crea una funcion
    const dispatch = useDispatch();

    const changeLanguage = (e) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);
    }

    const onSaveLanguage = () => {
        switch (language) {
            case "es":
                let languageES = {
                    language: language,
                    messages: messagesSpanish
                }
                dispatch(setLanguageAction(language, messagesSpanish));
                localStorage.setItem('language', JSON.stringify(languageES))
                break;
            case "en":
                let languageEN = {
                    language: language,
                    messages: messagesEnglish
                }
                dispatch(setLanguageAction(language, messagesEnglish));
                localStorage.setItem('language', JSON.stringify(languageEN))
                break;
            case "pt":
                let languagePT = {
                    language: language,
                    messages: messagesPortuguese
                }
                dispatch(setLanguageAction(language, messagesPortuguese));
                localStorage.setItem('language', JSON.stringify(languagePT))
                break;
            default:
                break;
        }
    }

    return (
        <Fragment>
            <Grid container
                direction="column">
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-required-label">{messages.language_change}</InputLabel>
                            <Select value={language} onChange={changeLanguage} >
                                <MenuItem value='es'>{messages.language_change_spanish}</MenuItem>
                                <MenuItem value='en'>{messages.language_change_english}</MenuItem>
                                <MenuItem value='pt'>{messages.language_change_portuguese}</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="flex-end"
                    alignItems="flex-end"
                >
                    <Grid item className={classes.button}>
                        <Button
                            startIcon={<SaveIcon />}
                            variant="contained"
                            color="primary"
                            onClick={onSaveLanguage}
                        >
                            {messages.color_picker_save}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Language;