import React, { useState } from 'react';
import { Grid, Input, TextField, MenuItem } from '@material-ui/core/';

const distanceMetric = [
    {
        value: 'meters',
        label: "Meters"
    },
    {
        value: 'kilometers',
        label: "km"
    },
    {
        value: 'miles',
        label: "Miles"
    },
]

function Distance() {
    const [units, setUnits] = React.useState('kilometers');
    const [distance, setDistance] = useState('')

    const handleChange = (event) => {
        setUnits(event.target.value);
    };
    
    return (
        <Grid container spacing='1' justify="center">
            <Grid item xs="4" align="center" style={{ display: 'flex' }}>
                <Input 
                    placeholder="Distance" 
                    inputProps={{ 'aria-label': 'description' }} 
                    onChange={event => setDistance(event.target.value)}/>
            </Grid>
            <Grid item xs="3">
                <TextField
                    id="standard-select-currency"
                    select
                    label="Units"
                    value={units}
                    onChange={handleChange}>
                    {distanceMetric.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={6} align="center">
            <div>
                Distance: {distance}
            </div>
            <div>
                Units: {units}
            </div>
            </Grid>
        </Grid>
        
    )
}

export default Distance