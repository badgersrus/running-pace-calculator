import React, { useState } from 'react';
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
    const [units, setUnits] = useState('km');
    const [paceMins, setPaceMins] = useState(0)
    const [paceSecs, setPaceSecs] = useState(0)

    return (
        <Grid container spacing='1' justify="center">
            <Grid item xs="3" align="center" style={{ display: 'flex' }}>
                <Input 
                    placeholder="04" 
                    inputProps={{ 'aria-label': 'description' }} 
                    onChange={event => setPaceMins(event.target.value)}/>
            </Grid>
            <Grid item xs="3" align="center" style={{ display: 'flex' }}>
                <Input 
                    placeholder="30" 
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={event => setPaceSecs(event.target.value)}/>
            </Grid>
            <Grid alignItems="center" item xs="3" style={{ display: 'flex' }}>
                <TextField
                    id="standard-select-currency"
                    select
                    label="Units"
                    value={units}
                    onChange={event => setUnits(event.target.value)}>
                    {paceUnits.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={6} align="center">
                <div>
                    Minutes: {paceMins}
                </div>
                <div>
                    Seconds: {paceSecs}
                </div>
                <div>
                    Units: {units}
                </div>
            </Grid>
        </Grid>
    )
}

export default Pace