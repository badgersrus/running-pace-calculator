import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Distance from './Distance';
import Pace from './Pace';
import Time from './Time'
import { CalculationContext } from '../App';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(1)
    },
    form: {
        width: '100%', 
        marginTop: theme.spacing(3),
    },
    submit: {
        backgroundColor: "#ffa64d",
        color: "white",
        margin: theme.spacing(3, 0, 2),
    }
}));

function CalculatorForm() {
    const { state } = useContext(CalculationContext)
    const [showResults, setShowResults] = useState(false)
    const classes = useStyles();
    
    function calculate() {
        setShowResults(true)
        console.log(state.distance)

    }

    return (
        <div className={classes.paper}>
            <Typography component="h1" variant="h5" justify="center">
                Calculate your pace
            </Typography>
            <form className={classes.form} noValidate>
                <Grid container spacing='5'>
                    <Grid item xs="12">
                        <Time />
                    </Grid>
                    <Grid item xs="12">
                        <Distance />
                    </Grid>
                    <Grid item xs="12">
                        <Pace />
                    </Grid>
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                        onClick={() => calculate()}>
                        Calculate
                    </Button>
                    <Grid item xs="12">
                        {showResults ? 
                         <div>
                                <p>Hours: {state.hours}</p>
                                <p>Minutes: {state.minutes}</p>
                                <p>Seconds: {state.seconds}</p>

                                <p>Distance: {state.distance}</p>
                                <p>Distance units: {state.distanceUnits}</p>

                                <p>Pace Minutes: {state.paceMinutes}</p>
                                <p>Pace Seconds: {state.paceSeconds}</p>
                                <p>Pace Units: {state.paceUnits}</p>
                         </div> : null}
                    </Grid>
                 </Grid>
            </form>
        </div>
    );
}

export default CalculatorForm