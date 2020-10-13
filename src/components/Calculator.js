import React, { useContext, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Distance from './Distance';
import Pace from './Pace';
import Time from './Time'
import { CalculationContext } from '../App';
import { ADD_PACE_SECONDS, ADD_PACE_MINUTES, ADD_TIME_HOURS, ADD_TIME_MINUTES, ADD_TIME_SECONDS, ADD_DISTANCE } from '../calculationReducer';


function Calculator() {
    const { state, dispatch } = useContext(CalculationContext)
    const classes = useStyles();

    useEffect(() => {
        if (state.hours === '' && state.minutes === '' && state.seconds === '') removeTimeSet()
        if (state.paceMinutes === '' && state.paceSeconds === '') removePaceSet()
        if (state.distance === '') removeDistanceSet()
    })

    const removeTimeSet = () => {
        dispatch({
            payload: { isTimeSet: false }
        });
    }
    const removePaceSet = () => {
        dispatch({
            payload: { isPaceSet: false }
        });
    }
    const removeDistanceSet = () => {
        dispatch({
            payload: { isDistanceSet: false }
        });
    }

    function calculatePace() {
        let totalSeconds = (parseInt(state.hours) * 3600) + (parseInt(state.minutes) * 60) + parseInt(state.seconds)
        let distance = getDistanceInRelativeUnits()
        let timePerDistance = Math.floor(totalSeconds / distance)
        let paceMins = Math.floor(timePerDistance % 3600 / 60)
        var paceSecs = Math.floor(timePerDistance % 3600 % 60)

        dispatch({
            type: ADD_PACE_MINUTES,
            payload: {
                paceMinutes: paceMins,
                isPaceSet: true
            }
        });

        dispatch({
            type: ADD_PACE_SECONDS,
            payload: {
                paceSeconds: paceSecs,
                isPaceSet: true
            }
        });
    }

    function calculateTime() {
        let distance = getDistanceInRelativeUnits()
        let paceInSeconds = getPaceInSeconds()

        let totalSeconds = distance * paceInSeconds
        var hours = Math.floor(totalSeconds / 3600);
        var mins = Math.floor(totalSeconds % 3600 / 60);
        var secs = Math.floor(totalSeconds % 3600 % 60);

        dispatch({
            type: ADD_TIME_HOURS,
            payload: {
                hours: hours,
                isTimeSet: true
            }
        });

        dispatch({
            type: ADD_TIME_MINUTES,
            payload: {
                minutes: mins,
                isTimeSet: true
            }
        });

        dispatch({
            type: ADD_TIME_SECONDS,
            payload: {
                seconds: secs,
                isTimeSet: true
            }
        });
    }

    function calculateDistance() {
        let totalSeconds = (parseInt(state.hours) * 3600) + (parseInt(state.minutes) * 60) + parseInt(state.seconds)

        let paceSeconds = getPaceInSeconds()
        let distance = calculateDistanceForUnits(totalSeconds, paceSeconds)
        
        console.log("distance")
        console.log(distance)
        
        dispatch({
            type: ADD_DISTANCE,
            payload: { 
                distance: distance,
                isDistanceSet: true
            }
        });
    }

    function getDistanceInRelativeUnits() {
        let intDistance = parseFloat(state.distance)
        switch (state.paceUnits) {
            case "kilometers": {
                return state.distanceUnits === 'kilometers' ? intDistance :
                    state.distanceUnits === 'meters' ? intDistance / 1000 :
                        intDistance * 1.60934
            }
            case "miles": {
                return state.distanceUnits === 'kilometers' ? intDistance / 1.60945 :
                    state.distanceUnits === 'meters' ? (intDistance / 1000) / 1.60945 :
                        intDistance

            }
            default:
                return null
        }
    }

    function calculateDistanceForUnits(totalSeconds, paceSeconds) {
        switch (state.paceUnits) {
            case "kilometers": {
                return state.distanceUnits === 'kilometers' ? (totalSeconds / paceSeconds).toFixed(2) :
                    state.distanceUnits === 'meters' ? Math.floor(totalSeconds / paceSeconds * 1000) :
                        (totalSeconds / (paceSeconds * 1.60945)).toFixed(2)
            }
            case "miles": {
                return state.distanceUnits === 'kilometers' ? (totalSeconds / (paceSeconds / 1.60945)).toFixed(2) :
                    state.distanceUnits === 'meters' ? Math.floor((totalSeconds / (paceSeconds / 1.60945)) * 1000) :
                        (totalSeconds / paceSeconds).toFixed(2)
            }
            default:
                return null
        }
    }

    function getPaceInSeconds() {
        return parseInt(state.paceMinutes * 60) + parseInt(state.paceSeconds)
    }

    function calculate() {
        state.isTimeSet && state.isDistanceSet ? calculatePace() :
            state.isDistanceSet && state.isPaceSet ? calculateTime() :
                state.isPaceSet && state.isTimeSet ? calculateDistance() :
                    console.log("Time, distance or pace must be set")
    }

    function isButtonDisabled() {
        return state.isPaceSet && state.isTimeSet && state.isDistanceSet
    }

    return (
        <div className={classes.paper}>
            <Typography component="h1" variant="h5" >
                Calculate your stuff
            </Typography>
            <form className={classes.form} noValidate>
                <Grid container spacing='5'>
                    <Grid item xs={12}>
                        <Time />
                    </Grid>
                    <Grid item xs={12}>
                        <Distance />
                    </Grid>
                    <Grid item xs={12}>
                        <Pace />
                    </Grid>
                    <Button
                        disabled={isButtonDisabled()}
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

export default Calculator