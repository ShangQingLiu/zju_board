import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Home_AD.css'

//image
const home_ad_1 = require('../img/home_ad_1.jpg');

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(3, 2),
            marginTop:"5rem",
        },
    }),
);

export default function Home_AD() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <img src={home_ad_1} className="Home-AD-pic-1" alt="homeAd1"/>
            </Paper>
        </div>
    );
}