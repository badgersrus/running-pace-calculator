import React from 'react';
import { Grid, Input, TextField, MenuItem } from '@material-ui/core/';

const distance = [
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

    const handleChange = (event) => {
        setUnits(event.target.value);
    };
    return (
        <Grid container spacing='1' justify="center">
            <Grid item xs="4" align="center" style={{ display: 'flex' }}>
                <Input placeholder="Distance" inputProps={{ 'aria-label': 'description' }} />
            </Grid>
            <Grid item xs="3">
                <TextField
                    id="standard-select-currency"
                    select
                    label="Units"
                    value={units}
                    onChange={handleChange}>
                    {distance.map((option) => (
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