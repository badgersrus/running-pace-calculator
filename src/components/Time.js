import React from 'react';
import { Grid, Input } from '@material-ui/core/';

function Time() {
    const [hours, setHours] = React.useState(0)
    const [minutes, setMinutes] = React.useState(0)
    const [seconds, setSeconds] = React.useState(0)

    return (
        <Grid container spacing='1' justify="center">
            <Grid item xs="3" align="center">
                <Input
                    id="time-hours"
                    placeholder="Hours"
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={event => setHours(event.target.value)} />
            </Grid>
            <Grid item xs="3" align="center">
                <Input
                    id="time-mins"
                    placeholder="Minutes"
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={event => setMinutes(event.target.value)} />
            </Grid>
            <Grid item xs="3" align="center">
                <Input
                    id="time-seconds"
                    placeholder="Seconds"
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={event => setSeconds(event.target.value)} />
            </Grid>
            <Grid item xs={6} align="center">
                <div>
                    Hours: {hours}
                </div>
                <div>
                    Mins: {minutes}
                </div>
                <div>
                    Secs: {seconds}
                </div>
            </Grid>
        </Grid>
    )
}

export default Time