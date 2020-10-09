import React from 'react';
import { Grid, Input, TextField, MenuItem } from '@material-ui/core/';

const paceUnits = [
    {
        value: "km",
        label: "min/ km"
    },
    {
        value: "mile",
        label: "min/ mile"
    },
]

function Pace() {
    const [units, setUnits] = React.useState('km');

    const handleChange = (event) => {
        setUnits(event.target.value);
    };


    return (
        <Grid container spacing='1' justify="center">
            <Grid item xs="3" align="center" style={{ display: 'flex' }}>
                <Input placeholder="04" inputProps={{ 'aria-label': 'description' }} />
            </Grid>
            <Grid item xs="3" align="center" style={{ display: 'flex' }}>
                <Input placeholder="30" inputProps={{ 'aria-label': 'description' }} />
            </Grid>
            <Grid alignItems="center" item xs="3" style={{ display: 'flex' }}>
                <TextField
                    id="standard-select-currency"
                    select
                    label="Units"
                    value={units}
                    onChange={handleChange}>
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