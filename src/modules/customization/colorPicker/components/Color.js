import React, { useState, Fragment } from 'react';
import { ChromePicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Icon, IconButton, TextField, Card, Dialog, Grid} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';
import PaletteIcon from '@material-ui/icons/Palette';
import Colorize from '@material-ui/icons/Colorize';
//Action de redux 
import { setColorsAction } from '../store/ColorsAction';

const useStyles = makeStyles(theme => ({
    preview: {
        minWidth: 200,
        maxWidth: 450,
        padding: theme.spacing(2),
    },
    title: {
        fontSize: 24,
        margin: theme.spacing(2),
    },
    subtitle: {
        fontSize: 14,
        margin: theme.spacing(2),
    },
}));

const Color = () => {

    const currentColors = useSelector(state => state.customization.colors);
    const messages = useSelector(state => state.language.messages);
    const classes = useStyles();
    //state del componente
    const [colorPrimary, setColorPrimary] = useState(currentColors.colorPrimary);
    const [colorSecondary, setColorSecondary] = useState(currentColors.colorSecondary);
    const [textPrimary, setTextPrimary] = useState(currentColors.textPrimary);
    const [textSecondary, setTextSecondary] = useState(currentColors.textSecondary);
    //State de Show
    const [showColorPrimary, setShowColorPrimary] = useState(false);
    const [showColorSecondary, setShowColorSecondary] = useState(false);
    const [showTextPrimary, setShowTextPrimary] = useState(false);
    const [showTextSecondary, setShowTextSecondary] = useState(false);
    //utilizar useDispatch y te crea una funcion
    const dispatch = useDispatch();

    const onChangeColorPrimary = (color) => {
        setColorPrimary(color);
    }

    const onChangeColorSecondary = (color) => {
        setColorSecondary(color);
    }

    const onChangeTextPrimary = (color) => {
        setTextPrimary(color);
    }

    const onChangeTextSecondary = (color) => {
        setTextSecondary(color);
    }

    const openColorPrimary = () => {
        setShowColorPrimary(!showColorPrimary);
    }

    const openColorSecondary = () => {
        setShowColorSecondary(!showColorSecondary);
    }
    
    const openTextPrimary = () => {
        setShowTextPrimary(!showTextPrimary);
    }

    const openTextSecondary = () => {
        setShowTextSecondary(!showTextSecondary);
    }
    
    const onSubmit = () => {
        const colorPicker = {
            colorPrimary,
            colorSecondary,
            textPrimary,
            textSecondary
        }
        localStorage.setItem('colors', JSON.stringify(colorPicker))
        return dispatch(setColorsAction(colorPicker));
    }
    return (
        <Fragment>
            <Grid container item xs={12} lg={12}>
                <Grid container item >
                    <Grid container justify="center" spacing={4}>
                        <Grid container item justify="center" xs={3} lg={3} spacing={3}>
                            <Grid xs={1} lg={1} item>
                                <br />
                                <Icon><PaletteIcon /></Icon>
                            </Grid>
                            <Grid xs={6} lg={6} item>
                                <TextField
                                    value={colorPrimary}
                                    name="colorPrimary"
                                    label={messages.color_primary}
                                    onChange={(e) => onChangeColorPrimary(e.target.value)}
                                />
                            </Grid>
                            <Grid xs={1} lg={1} item>
                                <IconButton style={{ backgroundColor: colorPrimary }} onClick={openColorPrimary} aria-label="upload picture" component="span">
                                    <Colorize />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container item justify="center" xs={3} lg={3} spacing={3}>
                            <Grid item xs={1} lg={1} >
                                <br />
                                <Icon><PaletteIcon /></Icon>
                            </Grid>
                            <Grid xs={6} lg={6} item>
                                <TextField
                                    value={colorSecondary}
                                    name="colorSecondary"
                                    label={messages.color_secondary}
                                    onChange={(e) => onChangeColorSecondary(e.target.value)}
                                />
                            </Grid>
                            <Grid xs={1} lg={1} item>
                                <IconButton style={{ backgroundColor: colorSecondary }} onClick={openColorSecondary} aria-label="upload picture" component="span">
                                    <Colorize />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container item justify="center" xs={3} lg={3} spacing={3}>
                            <Grid item xs={1} lg={1} >
                                <br />
                                <Icon><PaletteIcon /></Icon>
                            </Grid>
                            <Grid xs={6} lg={6} item>
                                <TextField
                                    value={textPrimary}
                                    name="textPrimary"
                                    label={messages.text_primary}
                                    onChange={(e) => onChangeTextPrimary(e.target.value)}
                                />
                            </Grid>
                            <Grid xs={1} lg={1} item>
                                <IconButton style={{ backgroundColor: textPrimary }} onClick={openTextPrimary} aria-label="upload picture" component="span">
                                    <Colorize />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container item justify="center" xs={3} lg={3} spacing={3}>
                            <Grid item xs={1} lg={1} >
                                <br />
                                <Icon><PaletteIcon /></Icon>
                            </Grid>
                            <Grid xs={6} lg={6} item>
                                <TextField
                                    value={textSecondary}
                                    name="textSecondary"
                                    label={messages.text_secondary}
                                    onChange={(e) => onChangeTextSecondary(e.target.value)}
                                />
                            </Grid>
                            <Grid xs={1} lg={1} item>
                                <IconButton style={{ backgroundColor: textSecondary }} onClick={openTextSecondary} aria-label="upload picture" component="span">
                                    <Colorize />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Grid container
                        direction="column-reverse"
                        justify="flex-end"
                        alignItems="center">
                        <Card className={classes.preview}>
                            <Typography variant='h6'> Vista previa </Typography>
                            <div style={{
                                transition: 'ease all 500ms',
                                backgroundColor: colorPrimary
                            }}>
                                <Typography style={{ color: textPrimary }}
                                    className={classes.title}
                                    color="textPrimary"
                                    variant='body2'
                                >
                                    {messages.color_primary}
                                </Typography>
                            </div>
                            <div style={{
                                transition: 'ease all 500ms',
                                backgroundColor: colorSecondary
                            }}>
                                <Typography style={{ color: textSecondary }}
                                    className={classes.title}
                                    color="textPrimary"
                                    variant='body2'
                                >
                                    {messages.color_secondary}
                                </Typography>
                            </div>
                        </Card>
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        justify="flex-end"
                        alignItems="flex-end">
                        <Grid item xs={5} lg={6}>
                            <br /><br />
                            <Button startIcon={<SaveIcon />} onClick={onSubmit} variant="contained" color="primary">
                                {messages.color_picker_save}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog open={showColorPrimary} onClose={openColorPrimary} aria-labelledby="form-dialog-title">
                <ChromePicker
                    color={colorPrimary}
                    onChangeComplete={(colorPrimary) => { onChangeColorPrimary(colorPrimary.hex) }}
                />
            </Dialog>
            <Dialog open={showColorSecondary} onClose={openColorSecondary} aria-labelledby="form-dialog-title">
                <ChromePicker
                    color={colorSecondary}
                    onChangeComplete={(colorSecondary) => { onChangeColorSecondary(colorSecondary.hex) }}
                />
            </Dialog>
            <Dialog open={showTextPrimary} onClose={openTextPrimary} aria-labelledby="form-dialog-title">
                <ChromePicker
                    color={textPrimary}
                    onChangeComplete={(textPrimary) => { onChangeTextPrimary(textPrimary.hex) }}
                />
            </Dialog>
            <Dialog open={showTextSecondary} onClose={openTextSecondary} aria-labelledby="form-dialog-title">
                <ChromePicker
                    color={textSecondary}
                    onChangeComplete={(textSecondary) => { onChangeTextSecondary(textSecondary.hex) }}
                />
            </Dialog>
        </Fragment>
    );
}
export default Color;