import React, { useContext, useEffect } from 'react';
import { Grid, Input, TextField, MenuItem, Box, Button, Hidden } from '@material-ui/core/';
import { CalculationContext } from '../App';
import { ADD_PACE_MINUTES, ADD_PACE_SECONDS, ADD_PACE_UNITS, REMOVE_PACE, CLEAR_PACE } from '../calculationReducer'
import { displayTime } from '../services/conversion'
import { paceUnits } from '../services/objects'

function Pace() {
    const { state, dispatch } = useContext(CalculationContext)

    useEffect(() => {
        if (state.paceMinutes.length === 3) {
            dispatch({
                type: ADD_PACE_MINUTES,
                payload: {
                    paceMinutes: parseInt(state.paceMinutes),
                    isPaceSet: true
                }
            })
        }

        if (state.paceSeconds.length === 3) {
            dispatch({
                type: ADD_PACE_SECONDS,
                payload: {
                    paceSeconds: parseInt(state.paceSeconds),
                    isPaceSet: true
                }
            })
        }

        if (state.paceMinutes === '' && state.paceSeconds === '') {
            dispatch({
                type: REMOVE_PACE,
                payload: {
                    isPaceSet: false
                }
            })
        }
    }, [state.paceMinutes, state.paceSeconds, state.isPaceSet])

    const handleAddPaceMinutes = (event) => {
        dispatch({
            type: ADD_PACE_MINUTES,
            payload: {
                paceMinutes: event.target.value,
                isPaceSet: true
            }
        })
    }

    const handleAddPaceSeconds = (event) => {
        dispatch({
            type: ADD_PACE_SECONDS,
            payload: {
                paceSeconds: event.target.value,
                isPaceSet: true
            }
        })
    }

    const handleAddPaceUnits = (event) => {
        dispatch({
            type: ADD_PACE_UNITS,
            payload: { paceUnits: event.target.value }
        });
    }

    const clearPace = () => {
        dispatch({
            type: CLEAR_PACE,
            payload: {
                paceMinutes: 0,
                paceSeconds: 0,
                isPaceSet: false
            }
        });
    }

    return (
        <>
            <Grid container spacing='1' justify="center">
                <Grid item xs='2' align="center" style={{ display: 'flex' }}>
                    <Input
                        placeholder="04"
                        style={{ width: 50 }}
                        value={displayTime(state.paceMinutes)}
                        inputProps={{ 'aria-label': 'description' }}
                        onChange={handleAddPaceMinutes}
                        color="secondary" />
                </Grid>
                <Grid item xs='2' align="center" style={{ display: 'flex' }}>
                    <Input
                        placeholder="30"
                        style={{ width: 50 }}
                        value={displayTime(state.paceSeconds)}
                        inputProps={{ 'aria-label': 'description' }}
                        onChange={handleAddPaceSeconds}
                        color="secondary" />
                </Grid>
                <Grid alignItems="center" item xs='3' style={{ display: 'flex' }}>
                    <TextField
                        select
                        value={state.paceUnits}
                        onChange={handleAddPaceUnits}>
                        {paceUnits.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                {/* <Hidden xsUp> */}
                <Grid item xs={0.1}>
                    {state.isPaceSet ?
                        <Button
                        style={{ color: "white" }}
                        onClick={clearPace}>x</Button>
                        : null
                    }
                </Grid>
                    {/* </Hidden> */}
            </Grid>
            <Box mt={2}></Box>
        </>
    )
}

export default Pace