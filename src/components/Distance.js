import React, { useContext, useEffect } from 'react';
import { Grid, Input, Button, TextField, MenuItem } from '@material-ui/core/';
import { CalculationContext } from '../App';
import { ADD_DISTANCE, ADD_DISTANCE_UNITS, REMOVE_DISTANCE, CLEAR_DISTANCE } from '../calculationReducer'
import { distanceMetric } from '../services/objects'
import '../styling/Distance.css'

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
            payload: {
                distance: event.target.value,
                isDistanceSet: true
            }
        });
    }
    const handleAddDistanceUnits = (event) => {
        dispatch({
            type: ADD_DISTANCE_UNITS,
            payload: { distanceUnits: event.target.value }
        });
    }

    const clearDistance = () => {
        dispatch({
            type: CLEAR_DISTANCE,
            payload: {
                distance: "",
                isDistanceSet: false
            }
        });
    }

    return (
        <Grid container spacing='1' justify="center">
            <Grid item xs={3.5} align="center" style={{ display: 'flex' }}>
                <Input
                    style = {{width: 100}}
                    placeholder="Distance"
                    value={state.distance}
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={handleAddDistance} 
                    color="secondary"/>
            </Grid>
            <Grid item xs={3}>
                <TextField
                    select
                    value={state.distanceUnits}
                    onChange={handleAddDistanceUnits}>
                    {distanceMetric.map((option) => (
                        <MenuItem
                            key={option.value}
                            value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={0.5}>
                {state.isDistanceSet ?
                    <Button
                        style={{ color: "white"}}
                        onClick={clearDistance}>x</Button>
                    : null
                }
            </Grid>
        </Grid>

    )
}

export default Distance