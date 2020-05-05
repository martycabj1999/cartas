import React from 'react'
import { useSelector } from 'react-redux';
import { Grid, ExpansionPanel, Card, CardContent, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import LanguagePage from '../language/pages/LanguagePage';
import ColorsPage from '../colorPicker/pages/ColorsPage';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PaletteTwoToneIcon from '@material-ui/icons/PaletteTwoTone';
import GTranslateTwoToneIcon from '@material-ui/icons/GTranslateTwoTone';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    title: {
        marginLeft: 0,
    },
    heading: {
        fontSize: theme.typography.pxToRem(19),
        flexBasis: '33.33%',
        flexShrink: 0,
        fontWeight: theme.typography.fontWeightRegular,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(16),
        color: theme.palette.text.secondary,
    },
}));

const PanelCustomization = () => {
    const classes = useStyles();
    const messages = useSelector(state => state.language.messages);
    return (
        <Grid>
            <Card>
                <CardContent>
                    <Typography
                        variant={"h5"}
                        className={classes.title}>{messages.panel_customization_title}</Typography>
                </CardContent>
            </Card>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <PaletteTwoToneIcon />
                        <Typography className={classes.heading}>{messages.panel_customization_color_title}</Typography>
                        <Typography className={classes.secondaryHeading}>
                            {messages.panel_customization_color_subtitle}
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ColorsPage />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <GTranslateTwoToneIcon />
                        <Typography className={classes.heading}>{messages.panel_customization_language_title}</Typography>
                        <Typography className={classes.secondaryHeading}>{messages.panel_customization_language_subtitle}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <LanguagePage />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </Grid>
    );
}

export default PanelCustomization;