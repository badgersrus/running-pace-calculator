import { Grid } from '@material-ui/core/';
import React from 'react';
import { units } from '../services/objects'
import { makeStyles } from '@material-ui/core/styles';
import '../styling/UnitSpinner.css'

function UnitSpinner() {
    const classes = useStyles();

    return (
        <Grid container spacing='1' justify="center">
            <Grid item xs="12" align="center">
                <div className="scrollhost">
                    <table>
                        <tr>
                        {units.map((conversion, i) => {
                            return (<><td index={i}>{conversion.km}</td></>)
                        })}
                        </tr>
                        <tr>
                        {units.map((conversion, i) => {
                            return (<><td index={i}>{conversion.mile}</td></>)
                        })}
                        </tr>
                    </table>
                </div>
            </Grid>
        </Grid>

    )
}

const useStyles = makeStyles((theme) => ({
    wrapper: {
        overflowX: "auto",
        width: "100%",
        display: "block"
    }
    // paper: {
    //     marginTop: theme.spacing(8),
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     padding: theme.spacing(1)
    // },
    // form: {
    //     width: '100%',
    //     marginTop: theme.spacing(3),
    // },
    // submit: {
    //     backgroundColor: "#ffa64d",
    //     color: "white",
    //     margin: theme.spacing(3, 0, 2),
    // }
}));

export default UnitSpinner