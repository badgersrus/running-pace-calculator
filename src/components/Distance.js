import React, { useContext, useEffect } from 'react';
import { Grid, MenuItem, InputBase, Select, IconButton } from '@material-ui/core/';
import { CalculationContext } from '../App';
import { ADD_DISTANCE, ADD_DISTANCE_UNITS, REMOVE_DISTANCE, CLEAR_DISTANCE, SET_CALCULATING } from '../calculationReducer'
import { distanceMetric } from '../services/objects'
import { DeleteOutline } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import '../styling/Distance.css'

// const useStyles = makeStyles((theme) => ({
//     font: {
//         fontFamily: '"Staatliches", cursive',
//     },
// }));


function Distance() {
    const { state, dispatch } = useContext(CalculationContext)
    // const classes = useStyles();

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

        dispatch({
            type: SET_CALCULATING,
            payload: {
                isCalculating: false
            }
        });
    }

    return (
        <Grid container spacing='1' justify="center" style={{ display: 'flex', marginRight: 50}}>
            <Grid item xs={2} align="center" style={{ display: 'flex'}}>
                <InputBase
                    style = {{fontSize: 30}}
                    placeholder="5000"
                    value={state.distance}
                    inputProps={{min: 0, style: { textAlign: 'right' }}}
                    onChange={handleAddDistance}/>
            </Grid>
            <Grid item xs={1} style={{ display: 'flex'}}>
                <Select
                    disableUnderline
                    // className={classes.font}
                    value={state.distanceUnits}
                    onChange={handleAddDistanceUnits}>
                    {distanceMetric.map((option) => (
                        <MenuItem
                            style = {{fontSize: 20}}
                            key={option.value}
                            value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
            <Grid item xs={1.5}/>
            <Grid item xs={1} style={{ marginRight: -60 }}>
                {state.isDistanceSet ?
                    <IconButton
                        style={{ color: "white"}}
                        onClick={clearDistance}>
                            <DeleteOutline />
                    </IconButton>
                    : null
                }
            </Grid>
        </Grid>

    )
}

export default Distance