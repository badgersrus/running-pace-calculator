import React, { useEffect, useState } from 'react';
import { Grid, TablePagination } from '@material-ui/core/';
import { units } from '../services/objects'
import '../styling/UnitSpinner.css'

function UnitSpinner() {
    const [displayUnits, setDisplayUnits] = useState([
        units.slice(0, 9)
    ])
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        console.log("units.length")
        console.log(units.length)
    }, [])

    const handleChangePage = (event, newPage) => {
        setPageNumber(newPage)
        let tempArray = units.slice(0, 1)
    }

    return (
        <Grid container spacing='1' justify="center">
            <Grid item xs={12} align="center">
                <div className="scrollhost">
                        <table>
                        <tr id="km-row">
                            <td>{displayUnits[0][0].km}</td>
                            <td>{displayUnits[0][1].km}</td>
                            <td>{displayUnits[0][2].km}</td>
                            <td>{displayUnits[0][3].km}</td>
                            <td>{displayUnits[0][4].km}</td>
                            <td>{displayUnits[0][5].km}</td>
                            <td>{displayUnits[0][6].km}</td>
                            <td>{displayUnits[0][7].km}</td>
                            <td>{displayUnits[0][8].km}</td>
                        </tr>
                        <tr id="mile-row">
                            <td>{displayUnits[0][0].mile}</td>
                            <td>{displayUnits[0][1].mile}</td>
                            <td>{displayUnits[0][2].mile}</td>
                            <td>{displayUnits[0][3].mile}</td>
                            <td>{displayUnits[0][4].mile}</td>
                            <td>{displayUnits[0][5].mile}</td>
                            <td>{displayUnits[0][6].mile}</td>
                            <td>{displayUnits[0][7].mile}</td>
                            <td>{displayUnits[0][8].mile}</td>
                        </tr>
                    </table> 
                </div>

                <TablePagination
                    style={{ padding: "0 10px", marginTop: -15, color: "white" }}
                    rowsPerPageOptions={[]}
                    component="div"
                    rowsPerPage={units.length}
                    page={pageNumber}
                    onChangePage={handleChangePage} />
            </Grid>
        </Grid>

    )
}

export default UnitSpinner