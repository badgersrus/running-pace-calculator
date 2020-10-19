import React, { useContext, useEffect } from 'react';
import { Grid, InputBase, Select, MenuItem, Box, IconButton, Typography } from '@material-ui/core/';
import { CalculationContext } from '../App';
import { ADD_PACE_MINUTES, ADD_PACE_SECONDS, ADD_PACE_UNITS, REMOVE_PACE, CLEAR_PACE, SET_CALCULATING } from '../calculationReducer'
import { displayTime } from '../services/conversion'
import { paceUnits } from '../services/objects'
import { DeleteOutline } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    font : {
        fontFamily: '"Staatliches", cursive',
        fontSize: 40
    },    
    fontLarge: {
        fontFamily: '"Staatliches", cursive',
        fontSize: 120
    },
}));

function Pace() {
    const classes = useStyles();
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
        dispatch({
            type: SET_CALCULATING,
            payload: {
                isCalculating: false
            }
        });
    }

    return (
        <>
            <Grid container  justify="center" spacing={1}>
                <Grid item xs={3} align="center" style={{ display: 'flex' }}>
                    <InputBase
                        placeholder="04"
                        className={classes.fontLarge}
                        value={displayTime(state.isCalculating, state.paceMinutes)}
                        inputProps={{ 'aria-label': 'description' }}
                        onChange={handleAddPaceMinutes}
                        color="secondary" />
                </Grid>
                <Grid item xs={1} align="center">
                    <Typography
                        style={{ marginBottom: 10 }}
                        className={classes.fontLarge}
                        color="inherit"
                        align="center">
                        :
                    </Typography>
                </Grid>
                <Grid item xs={3} align="center" style={{ display: 'flex' }}>
                    <InputBase
                        placeholder="30"
                        className={classes.fontLarge}
                        value={displayTime(state.isCalculating, state.paceSeconds)}
                        inputProps={{ 'aria-label': 'description' }}
                        onChange={handleAddPaceSeconds}
                        color="secondary" />
                </Grid>
                <Grid alignItems="center" item xs={1} style={{ display: 'flex'}}>
                    <Select
                        disableUnderline
                        className={classes.font}
                        value={state.paceUnits}
                        onChange={handleAddPaceUnits}>
                        {paceUnits.map((option) => (
                            <MenuItem key={option.value} value={option.value} className={classes.font}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={1}  alignItems="center" style={{ display: 'flex', marginLeft: -110}}>
                    {state.isPaceSet ?
                        <IconButton
                            style={{ color: "white" }}
                            onClick={clearPace}>
                                <DeleteOutline />
                        </IconButton>
                        : null
                    }
                </Grid>
            </Grid>
            <Box mt={2}></Box>
        </>
    )
}

export default Pace