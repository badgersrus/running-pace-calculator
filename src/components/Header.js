import React from 'react';
import { Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(8)
    }
}));

function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography 
                variant="h1" 
                color="inherit"
                align="center">
                CALCULATE YOUR PACE
            </Typography>
        </div>
    );
}
export default Header;
