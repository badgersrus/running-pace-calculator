import React, { useContext, useEffect } from 'react';
import { Grid, Input, TextField, MenuItem } from '@material-ui/core/';
import { CalculationContext } from '../App';
import { ADD_DISTANCE, ADD_DISTANCE_UNITS, REMOVE_DISTANCE } from '../calculationReducer'
import { distanceMetric } from '../services/objects'

function Distance() {
    const { state, dispatch } = useContext(CalculationContext)

    useEffect(() => {
        if (state.distance === '') {
            dispatch({
                type: REMOVE_DISTANCE,
                payload: {
                    isDistanceSet: false
                }
            })
        }
    }, [state.distance, state.isDistanceSet])

    const handleAddDistance = (event) => {
        dispatch({ 
            type: ADD_DISTANCE, 
            payload: { distance: event.target.value,
                isDistanceSet: true } });
    }
    const handleAddDistanceUnits = (event) => {
        dispatch({ 
            type: ADD_DISTANCE_UNITS, 
            payload: { distanceUnits: event.target.value } });
    }


    return (
        <Grid container spacing='1' justify="center">
            <Grid item xs="4" align="center" style={{ display: 'flex' }}>
                <Input 
                    placeholder="Distance" 
                    value={state.distance}
                    inputProps={{ 'aria-label': 'description' }} 
                    onChange={handleAddDistance}/>
            </Grid>
            <Grid item xs="3">
                <TextField
                    id="standard-select-currency"
                    select
                    label="Units"
                    value={state.distanceUnits}
                    onChange={handleAddDistanceUnits}>
                    {distanceMetric.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </Grid>
        
    )
}

export default Distance