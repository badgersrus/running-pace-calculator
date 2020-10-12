import { Grid } from '@material-ui/core/';
import React from 'react';
import { units } from '../services/objects'

function UnitSpinner() {


    return (
        <Grid container spacing='1' justify="center">
            <Grid item xs="4" align="center" style={{ display: 'flex' }}>
                <div>UNIT SPINNER</div>
                {units.map((conversion, index) => {
                    return (<>
                        {/* <a>{conversion.km}</a>
                        <a>{conversion.mile}</a> */}
                    </>
                    )

                })}
            </Grid>
        </Grid>

    )
}

export default UnitSpinner