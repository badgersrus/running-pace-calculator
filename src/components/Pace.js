import React, { useContext, useEffect } from 'react';
import { Grid, Input, TextField, MenuItem } from '@material-ui/core/';
import { CalculationContext } from '../App';
import { ADD_PACE_MINUTES, ADD_PACE_SECONDS, ADD_PACE_UNITS } from '../calculationReducer'
import { displayTime } from '../services/conversion'

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
    // eslint-disable-next-line 
    }, [state.paceMinutes, state.paceSeconds])

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

    return (
        <Grid container spacing='1' justify="center">
            <Grid item xs="3" align="center" style={{ display: 'flex' }}>
                <Input
                    placeholder="04"
                    value={displayTime(state.paceMinutes)}
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={handleAddPaceMinutes} />
            </Grid>
            <Grid item xs="3" align="center" style={{ display: 'flex' }}>
                <Input
                    placeholder="30"
                    value={displayTime(state.paceSeconds)}
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={handleAddPaceSeconds} />
            </Grid>
            <Grid alignItems="center" item xs="3" style={{ display: 'flex' }}>
                <TextField
                    select
                    label="Units"
                    value={state.paceUnits}
                    onChange={handleAddPaceUnits}>
                    {paceUnits.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </Grid>
    )
}

const paceUnits = [
    {
        value: "kilometers",
        label: "km"
    },
    {
        value: "miles",
        label: "mile"
    },
]

export default Pace