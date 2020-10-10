import React, { useContext } from 'react';
import { Grid, Input, TextField, MenuItem } from '@material-ui/core/';
import { CalculationContext } from '../App';
import { ADD_PACE_MINUTES, ADD_PACE_SECONDS, ADD_PACE_UNITS } from '../calculationReducer'

const paceUnits = [
    {
        value: "km",
        label: "km"
    },
    {
        value: "mile",
        label: "mile"
    },
]

function Pace() {
    const { state, dispatch } = useContext(CalculationContext)

    const handleAddPaceMinutes = (event) => {
        dispatch({ 
            type: ADD_PACE_MINUTES, 
            payload: { paceMinutes: event.target.value } });
    }

    const handleAddPaceSeconds = (event) => {
        dispatch({ 
            type: ADD_PACE_SECONDS, 
            payload: { paceSeconds: event.target.value } });
    }

    const handleAddPaceUnits = (event) => {
        dispatch({ 
            type: ADD_PACE_UNITS, 
            payload: { paceUnits: event.target.value } });
    }

    return (
        <Grid container spacing='1' justify="center">
            <Grid item xs="3" align="center" style={{ display: 'flex' }}>
                <Input 
                    placeholder="04" 
                    inputProps={{ 'aria-label': 'description' }} 
                    onChange={handleAddPaceMinutes}/>
            </Grid>
            <Grid item xs="3" align="center" style={{ display: 'flex' }}>
                <Input 
                    placeholder="30" 
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={handleAddPaceSeconds}/>
            </Grid>
            <Grid alignItems="center" item xs="3" style={{ display: 'flex' }}>
                <TextField
                    id="standard-select-currency"
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

export default Pace