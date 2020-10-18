import React, { useContext, useEffect } from 'react';
import { Grid, Input, Button, Typography, InputBase } from '@material-ui/core/';
import { CalculationContext } from '../App';
import { ADD_TIME_HOURS, ADD_TIME_MINUTES, ADD_TIME_SECONDS, REMOVE_TIME, CLEAR_TIME } from '../calculationReducer';
import { displayTime } from '../services/conversion';
import { inputStyles } from '../styling/inputs';
import {
    withStyles,
} from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
})(Input);

function Time() {
    const classes = inputStyles()
    const { state, dispatch } = useContext(CalculationContext)

    useEffect(() => {
        console.log("useEffect")
        console.log(state)
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
    }

    return (
        <Grid container spacing={1} justify="center" maxWidth="xs">
            <Grid item xs={1} align="center">
                <InputBase
                    placeholder="00"
                    style = {{fontSize: 30}}
                    value={displayTime(state.hours)}
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
                    style = {{fontSize: 30}}
                    value={displayTime(state.minutes)}
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={handleAddMinutes}/>
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
                    style = {{fontSize: 30}}
                    value={displayTime(state.seconds)}
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={handleAddSeconds}
                />
            </Grid>
            <Grid item xs={1}>
                {state.isTimeSet ?
                    <Button
                        style={{ color: "white" }}
                        onClick={clearTime}>x</Button>
                    : null
                }
            </Grid>
        </Grid>
    )
}

export default Time