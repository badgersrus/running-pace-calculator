import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Distance from './Distance';
import Pace from './Pace';
import Time from './Time'
import { CalculationContext } from '../App';
import { ADD_PACE_SECONDS, ADD_PACE_MINUTES, ADD_TIME_HOURS, ADD_TIME_MINUTES, ADD_TIME_SECONDS, ADD_DISTANCE_UNITS, ADD_DISTANCE } from '../calculationReducer';


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
                        state.distance

            }
            default:
                return null
        }
    }

    function getPaceInSeconds() {
        return parseInt(state.paceMinutes * 60 ) + parseInt(state.paceSeconds)
    }

    // eslint-disable-next-line no-extend-native
    Number.prototype.pad = function(size) {
        var s = String(this);
        while (s.length < (size || 2)) {s = "0" + s;}
        return s;
      }

    function calculatePace() {
        console.log("Calculating pace")

        let intHours = parseInt(state.hours)
        let intMins = parseInt(state.minutes)
        let intSecs = parseInt(state.seconds)

        let totalSeconds = (intHours * 3600) + (intMins * 60) + intSecs
        let distance = getDistanceForUnits()
        let secondsPerKm = Math.floor(totalSeconds / distance)
        let paceMins = Math.floor(secondsPerKm % 3600 / 60);
        var paceSecs = Math.floor((secondsPerKm % 3600 )% 60);

        paceSecs <= 9 ? String(paceSecs).padStart(0) : String(paceSecs)
        if (paceSecs <= 9) {
            var formattedNumber = ("0" + paceSecs).slice(-2);
            console.log(formattedNumber);
        }
        console.log("paceSecs")
        console.log(paceSecs)

        dispatch({
            type: ADD_PACE_MINUTES,
            payload: { paceMinutes: paceMins }
        });

        dispatch({
            type: ADD_PACE_SECONDS,
            payload: { paceSeconds: paceSecs }
        });
    }

    function calculateTime() {
        console.log("Calculating time")
        let distance = getDistanceForUnits()
        let paceInSeconds = getPaceInSeconds()

        let totalSeconds = distance * paceInSeconds
        var hours = Math.floor(totalSeconds / 3600);
        var mins = Math.floor(totalSeconds % 3600 / 60);
        var secs = Math.floor(totalSeconds % 3600 % 60);

        dispatch({
            type: ADD_TIME_HOURS,
            payload: { hours: hours }
        });

        dispatch({
            type: ADD_TIME_MINUTES,
            payload: { minutes: mins }
        });

        dispatch({
            type: ADD_TIME_SECONDS,
            payload: { seconds: secs }
        });
    }

    function calculateDistance() {
        console.log("Calculating distance")

        // let intHours = parseInt(state.hours)
        // let intMins = parseInt(state.minutes)
        // let intSecs = parseInt(state.seconds)

        // let totalSeconds = (intHours * 3600) + (intMins * 60) + intSecs
        // let distance = getDistanceForUnits()
        // let secondsPerKm = Math.floor(totalSeconds / distance)
        // let paceMins = Math.floor(secondsPerKm % 3600 / 60);
        // var paceSecs = Math.floor(secondsPerKm % 3600 % 60);

        // dispatch({
        //     type: ADD_DISTANCE,
        //     payload: { distance: paceMins }
        // });
    }

    function calculate() {
        state.isTimeSet && state.isDistanceSet ? calculatePace() :
            state.isDistanceSet && state.isPaceSet ? calculateTime() :
                state.isPaceSet && state.isTimeSet ? calculateDistance() :
                    console.log("ERROR")
    }

    return (
        <div className={classes.paper}>
            <Typography component="h1" variant="h5" >
                Calculate your stuff
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
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                        onClick={() => calculate()}>
                        Calculate
                    </Button>
                </Grid>
            </form>
        </div>
    );
}

export default CalculatorForm