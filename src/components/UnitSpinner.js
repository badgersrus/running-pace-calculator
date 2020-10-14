import React, { useEffect, useState } from 'react';
import { Grid, Slider } from '@material-ui/core/';
import { units } from '../services/objects'
import '../styling/UnitSpinner.css'
import { withStyles, makeStyles } from '@material-ui/core/styles';

const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },
    thumb: {
      height: 18,
      width: 18,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 0,
      borderRadius: 1,
    },
    rail: {
      height: 1,
      borderRadius: 1,
    },
  })(Slider);

function UnitSpinner() {
    let midWay = Math.floor((units.length / 2)) - 4
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


    function handleProgressChange(event, newValue) {
        setPage({
            ...page,
            currentPage: newValue,
            topIndex: newValue + 9,
            bottomIndex: newValue
        });
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
            <Grid item xs={12} align="center">
                <PrettoSlider
                    onChange={handleProgressChange}
                    value={page.currentPage}
                    type="range"
                    min={0}
                    max={units.length - 9}
                    step={1}
                />
            </Grid>
        </Grid>

    )
}

export default UnitSpinner