import React from 'react';
import { Grid, Input } from '@material-ui/core/';

function Time() {
    return (
        <Grid container spacing='1' justify="center">
            <Grid item xs="3" align="center">
                <Input placeholder="Hours" inputProps={{ 'aria-label': 'description', disableUnderline: true }} />
            </Grid>
            <Grid item xs="3" align="center">
                <Input placeholder="Minutes" inputProps={{ 'aria-label': 'description', disableUnderline: true }} />
            </Grid>
            <Grid item xs="3" align="center">
                <Input placeholder="Seconds" inputProps={{ 'aria-label': 'description', disableUnderline: true }} />
            </Grid>
        </Grid>
    )
}

export default Time