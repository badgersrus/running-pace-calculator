import React, { useEffect, useState } from 'react';
import { Grid, Slider } from '@material-ui/core/';
import { units } from '../services/objects'
import '../styling/ConversionSlider.css'
import { withStyles } from '@material-ui/core/styles';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const UnitSlider = withStyles({
    thumb: {
        height: 13,
        width: 13,
        backgroundColor: 'transparent',
        // border: '2px solid #bababa',
        border: '2px solid white',
        marginTop: -2,
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
        height: 10,
        backgroundImage: 'linear-gradient(90deg, rgba(230,164,154,1) 0%, rgba(255,255,255,1) 50%, rgba(227,154,142,1) 100%)',
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
    const [displayUnits, setDisplayUnits] = useState({
        units: units.slice(page.bottomIndex, page.topIndex),
        showKey: false
    })

    useEffect(() => {
        let tempArray = units.slice(page.bottomIndex, page.topIndex)
        setDisplayUnits({
            ...displayUnits,
            units: tempArray
        })
    }, [page])


    function handleProgressChange(event, newValue) {
        setPage({
            ...page,
            currentPage: newValue,
            topIndex: newValue + 9,
            bottomIndex: newValue
        });
    }

    function handleMouseUp() {
        setDisplayUnits({
            ...displayUnits,
            showKey: false
        })
    }
    function handleMouseDown() {
        setDisplayUnits({
            ...displayUnits,
            showKey: true
        })
    }

    return (

        <Grid container spacing='1' justify="center">
            <Grid item xs={1} container direction="column" spacing={2} align>
                <Grid item xs>
                    <ReactCSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        {displayUnits.showKey ?
                            <div style={{ paddingTop: 3, marginLeft: -20, fontSize: 20, color: "white" }}>
                                /KM
                            </div> : null
                        }
                    </ReactCSSTransitionGroup>
                </Grid>
                <Grid item xs></Grid>
            </Grid>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs align="center">
                    <table>
                        <tr id="km-row">
                            {[...Array(9)].map((x, i) =>
                                <td style={{alignContent: "center"}}>{displayUnits.units[i].km}</td>
                            )}
                        </tr>
                        <tr id="mile-row">
                            {[...Array(9)].map((x, i) =>
                                <td style={{alignContent: "center"}}>{displayUnits.units[i].mile}</td>
                            )}
                        </tr>
                    </table>
                </Grid>
            </Grid>
            <Grid item xs={1} container direction="column" spacing={2}>
                <Grid item xs></Grid>
                <Grid item xs>
                    <ReactCSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        {displayUnits.showKey ?
                            <div style={{ paddingRight: 5, fontSize: 20, color: "white"  }}>
                                /MILE
                        </div> : null
                        }
                    </ReactCSSTransitionGroup>
                </Grid>
            </Grid>
            <Grid item xs={12} align="center">
                <UnitSlider
                    onChange={handleProgressChange}
                    onMouseUp={handleMouseUp}
                    onMouseDown={handleMouseDown}
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