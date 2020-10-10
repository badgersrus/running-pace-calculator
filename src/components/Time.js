import React, { useContext, useEffect } from 'react';
import { Grid, Input } from '@material-ui/core/';
import { CalculationContext } from '../App';
import { ADD_TIME_HOURS, ADD_TIME_MINUTES, ADD_TIME_SECONDS } from '../calculationReducer'

function Time() {
    const { state, dispatch } = useContext(CalculationContext)
    
    const handleAddHours = (event) => {
        dispatch({ 
            type: ADD_TIME_HOURS, 
            payload: { 
                hours: event.target.value,
                isTimeSet: true
            } });
    }

    const handleAddMinutes = (event) => {
        dispatch({ 
            type: ADD_TIME_MINUTES, 
            payload: { minutes: event.target.value,
                isTimeSet: true } });
    }

    const handleAddSeconds = (event) => {
        dispatch({ 
            type: ADD_TIME_SECONDS, 
            payload: { seconds: event.target.value,
                isTimeSet: true } });
    }

    return (
        <Grid container spacing='1' justify="center">
            <Grid item xs="3" align="center">
                <Input
                    // value={state.hours}
                    id="time-hours"
                    placeholder="Hours"
                    inputProps={{ 'aria-label': 'description', 'max':'2' }}
                    onChange={handleAddHours} />

            </Grid>
            <Grid item xs="3" align="center">
                <Input
                    id="time-mins"
                    // value={state.minutes}
                    placeholder="Minutes"
                    inputProps={{ 'aria-label': 'description', 'max':'2' }}
                    onChange={handleAddMinutes} 
                    />
            </Grid>
            <Grid item xs="3" align="center">
                <Input
                    id="time-seconds"
                    // value={state.seconds}
                    placeholder="Seconds"
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={handleAddSeconds} />
            </Grid>
        </Grid>
    )
}

export default Time