import React, { useContext, useEffect } from 'react';
import { Grid, Input, Button, Typography, InputBase, IconButton } from '@material-ui/core/';
import { DeleteOutline } from "@material-ui/icons";
import { CalculationContext } from '../App';
import { ADD_TIME_HOURS, ADD_TIME_MINUTES, ADD_TIME_SECONDS, REMOVE_TIME, CLEAR_TIME, SET_CALCULATING } from '../calculationReducer';
import { displayTime } from '../services/conversion';
import { inputStyles } from '../styling/inputs';

function Time() {
    const classes = inputStyles()
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

    const clearTime = () => {
        dispatch({
            type: CLEAR_TIME,
            payload: {
                hours: 0,
                minutes: 0,
                seconds: 0,
                isTimeSet: false
            }
        });

        dispatch({
            type: SET_CALCULATING,
            payload: {
                isCalculating: false
            }
        });
    }

    return (
        <Grid container spacing={1} justify="center" maxWidth="xs">
            <Grid item xs={1} align="center" style={{ marginLeft: 50 }}>
                <InputBase
                    placeholder="00"
                    style={{ fontSize: 30 }}
                    value={displayTime(state.isCalculating, state.hours)}
                    inputProps={{ 'aria-label': 'naked' }}
                    onChange={handleAddHours}
                />

            </Grid>
            <Grid item xs={1} align="center">
                <Typography
                    variant="h4"
                    color="inherit"
                    align="center">
                    :
            </Typography>
            </Grid>
            <Grid item xs={1} align="center">
                <InputBase
                    placeholder="22"
                    style={{ fontSize: 30 }}
                    value={displayTime(state.isCalculating, state.minutes)}
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={handleAddMinutes} />
            </Grid>
            <Grid item xs={1} align="center">
                <Typography
                    variant="h4"
                    color="inherit"
                    align="center">
                    :
            </Typography>
            </Grid>
            <Grid item xs={1} align="center">
                <InputBase
                    placeholder="30"
                    style={{ fontSize: 30 }}
                    value={displayTime(state.isCalculating, state.seconds)}
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={handleAddSeconds}
                />
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={1} style={{ display: 'flex', marginLeft: -20 }}>
                {state.isTimeSet ?
                    <IconButton
                        style={{ color: "white" }}
                        onClick={clearTime}>
                        <DeleteOutline />
                    </IconButton>
                    : null
                }
            </Grid>
        </Grid>
    )
}

export default Time