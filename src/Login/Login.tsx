import React from 'react'
import {AccountCircle} from "@material-ui/icons";
import {Grid, TextField} from "@material-ui/core";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1)
        },
    })
);


export default function Login() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <AccountCircle/>
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="account name"/>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="password"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )


}

