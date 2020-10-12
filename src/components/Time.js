import { Grid, Input } from '@material-ui/core/';
import React, { useContext, useEffect } from 'react';
import { CalculationContext } from '../App';
import { ADD_TIME_HOURS, ADD_TIME_MINUTES, ADD_TIME_SECONDS, REMOVE_TIME } from '../calculationReducer';
import { displayTime } from '../services/conversion';

function Time() {
    const { state, dispatch } = useContext(CalculationContext)

    useEffect(() => {
        if (state.hours.length === 3) {
            dispatch({
                type: ADD_TIME_HOURS,
                payload: {
                    hours: parseInt(state.hours),
                    isTimeSet: true
                }
            })
        }

        if (state.minutes.length === 3) {
            dispatch({
                type: ADD_TIME_MINUTES,
                payload: {
                    minutes: parseInt(state.minutes),
                    isTimeSet: true
                }
            })
        }

        if (state.seconds.length === 3) {
            dispatch({
                type: ADD_TIME_SECONDS,
                payload: {
                    seconds: parseInt(state.seconds),
                    isTimeSet: true
                }
            })
        }

        if (state.hours === '' && state.minutes === '' && state.seconds === '') {
            dispatch({
                type: REMOVE_TIME,
                payload: {
                    isTimeSet: false
                }
            })
        }
    }, [state.hours, state.minutes, state.seconds, state.isTimeSet])

    const handleAddHours = (event) => {
        dispatch({
            type: ADD_TIME_HOURS,
            payload: {
                hours: event.target.value, 
                isTimeSet: true
            }
        })
    }

    const handleAddMinutes = (event) => {
        dispatch({
            type: ADD_TIME_MINUTES,
            payload: {
                minutes: event.target.value,
                isTimeSet: true
            }
        });
    }

    const handleAddSeconds = (event) => {
        dispatch({
            type: ADD_TIME_SECONDS,
            payload: {
                seconds: event.target.value,
                isTimeSet: true
            }
        });
    }

    return (
        <Grid container spacing='1' justify="center">
            <Grid item xs="3" align="center">
                <Input
                    placeholder="Hours"
                    value={displayTime(state.hours)}
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={handleAddHours} />

            </Grid>
            <Grid item xs="3" align="center">
                <Input
                    placeholder="Minutes"
                    value={displayTime(state.minutes)}
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={handleAddMinutes}
                />
            </Grid>
            <Grid item xs="3" align="center">
                <Input
                    placeholder="Seconds"
                    value={displayTime(state.seconds)}
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={handleAddSeconds} />
            </Grid>
        </Grid>
    )
}

export default Time