import React, { useEffect, useState } from 'react';
import { Grid, TablePagination, Button } from '@material-ui/core/';
import { units } from '../services/objects'
import '../styling/UnitSpinner.css'

function UnitSpinner() {
    let midWay = units.length / 2 
    const [page, setPage] = useState({
        currentPage: midWay,
        topIndex: midWay + 9,
        bottomIndex: midWay
    })

    const [displayUnits, setDisplayUnits] = useState(units.slice(page.bottomIndex, page.topIndex))
    
    useEffect(() => {
        let tempArray = units.slice(page.bottomIndex, page.topIndex)
        setDisplayUnits(tempArray)
    }, [page])

    const handleBack = (event) => {
        if (page.currentPage !== 0) {
            setPage({
                ...page,
                currentPage: page.currentPage - 1,
                topIndex: page.topIndex - 1,
                bottomIndex: page.bottomIndex - 1
            })
        }
    }
    const handleNext = (event) => {
        if(page.currentPage !== units.length - 9 ) {
            setPage({
                ...page,
                currentPage: page.currentPage + 1,
                topIndex: page.topIndex + 1,
                bottomIndex: page.bottomIndex + 1
            })
        }
    }

    return (
        <Grid container spacing='1' justify="center">
            <Grid item xs={12} align="center">
                <div className="scrollhost">
                        <table>
                        <tr id="km-row">
                            <td>{displayUnits[0].km}</td>
                            <td>{displayUnits[1].km}</td>
                            <td>{displayUnits[2].km}</td>
                            <td>{displayUnits[3].km}</td>
                            <td>{displayUnits[4].km}</td>
                            <td>{displayUnits[5].km}</td>
                            <td>{displayUnits[6].km}</td>
                            <td>{displayUnits[7].km}</td>
                            <td>{displayUnits[8].km}</td>
                        </tr>
                        <tr id="mile-row">
                            <td>{displayUnits[0].mile}</td>
                            <td>{displayUnits[1].mile}</td>
                            <td>{displayUnits[2].mile}</td>
                            <td>{displayUnits[3].mile}</td>
                            <td>{displayUnits[4].mile}</td>
                            <td>{displayUnits[5].mile}</td>
                            <td>{displayUnits[6].mile}</td>
                            <td>{displayUnits[7].mile}</td>
                            <td>{displayUnits[8].mile}</td>
                        </tr>
                    </table> 
                </div>

            </Grid>
            <Grid item xs={2} align="center">
                <Button
                    onClick={handleBack}>back</Button>
            </Grid>
            <Grid item xs={2} align="center">
                <Button
                    onClick={handleNext}>next</Button>
            </Grid>
        </Grid>

    )
}

export default UnitSpinner