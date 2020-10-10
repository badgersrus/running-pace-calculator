import React, { useContext } from 'react';
import { Grid, Input, TextField, MenuItem } from '@material-ui/core/';
import { CalculationContext } from '../App';
import { ADD_DISTANCE, ADD_DISTANCE_UNITS } from '../calculationReducer'

function UnitSpinner() {


    return (
        <Grid container spacing='1' justify="center">
            <Grid item xs="4" align="center" style={{ display: 'flex' }}>
                <div>UNIT SPINNER</div>
            </Grid>
        </Grid>
        
    )
}

const units = [
    {
        km: '2:50',
        mile: '4:33'
    },
    {
        km: '2:51',
        mile: '4:34'
    },
    {
        km: '2:52',
        mile: '4:36'
    },
    {
        km: '2:53',
        mile: '4:38'
    },
    {
        km: '2:54',
        mile: '4:40'
    },
    {
        km: '2:55',
        mile: '4:41'
    },
    {
        km: '2:56',
        mile: '4:43'
    },
    {
        km: '2:57',
        mile: '4:45'
    },
    {
        km: '2:58',
        mile: '4.46'
    },
    {
        km: '2:59',
        mile: '4.48'
    },
    {
        km: '3:00',
        mile: '4:50'
    },
    {
        km: '3:01',
        mile: '4:51'
    },
    {
        km: '3:02',
        mile: '4:53'
    },
    {
        km: '3:03',
        mile: '4:54'
    },
    {
        km: '3:04',
        mile: '4:56'
    },
    {
        km: '3:05',
        mile: '4:57'
    },
    {
        km: '3:06',
        mile: '4:58'
    },
    {
        km: '3:07',
        mile: '5:00'
    },
    {
        km: '3:08',
        mile: '5:02'
    },
    {
        km: '3:09',
        mile: '5:01'
    },
]

export default UnitSpinner