import React from 'react';
import { Typography, Box } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import '../styling/Header.css'

const useStyles = makeStyles((theme) => ({
    root: {
        color: "white",
        fontSize: "100px"
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
                FIND YOUR PACE
            </Typography>
        </div>
    );
}
export default Header;
