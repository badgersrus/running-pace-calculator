import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Distance from './Distance';
import Pace from './Pace';
import Time from './Time'
import { CalculationContext } from '../App';
import { ADD_PACE_SECONDS, ADD_PACE_MINUTES } from '../calculationReducer';


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
    const { state, dispatch } = useContext(CalculationContext)
    const [showResults, setShowResults] = useState(false)
    const classes = useStyles();

    function getDistanceForUnits() {
        switch (state.paceUnits) {
            case "kilometers": {
                return state.distanceUnits === 'kilometers' ? state.distance :
                    state.distanceUnits === 'meters' ? state.distance / 1000 :
                        Math.floor(state.distance * 1.60934)
            }
            case "miles": {
                return state.distanceUnits === 'kilometers' ? Math.floor(state.distance / 1.60945) :
                    state.distanceUnits === 'meters' ? Math.floor((state.distance / 1000) / 1.60945) :
                        state.distance * 1

            }
            default:
                return null
        }
    }


    function calculate() {
        let intHours = parseInt(state.hours)
        let intMins = parseInt(state.minutes)
        let intSecs = parseInt(state.seconds)

        let totalSeconds = (intHours * 3600) + (intMins * 60) + intSecs
        let distance = getDistanceForUnits()
        let secondsPerKm = Math.floor(totalSeconds / distance)
        let paceMins = Math.floor(secondsPerKm % 3600 / 60);
        var paceSecs = Math.floor(secondsPerKm % 3600 % 60);

        dispatch({
            type: ADD_PACE_MINUTES,
            payload: { paceMinutes: paceMins }
        });

        dispatch({
            type: ADD_PACE_SECONDS,
            payload: { paceSeconds: paceSecs }
        });

        setShowResults(true)
    }

    return (
        <div className={classes.paper}>
            <Typography component="h1" variant="h5" >
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
                    {/* <Grid item xs="12">
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
                    </Grid> */}
                </Grid>
            </form>
        </div>
    );
}

export default CalculatorForm