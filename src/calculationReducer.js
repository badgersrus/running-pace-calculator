export const ADD_TIME_HOURS = "ADD_TIME_HOURS"
export const ADD_TIME_MINUTES = "ADD_TIME_MINUTES"
export const ADD_TIME_SECONDS = "ADD_TIME_SECONDS"
export const ADD_DISTANCE = "ADD_DISTANCE"
export const ADD_DISTANCE_UNITS = "ADD_DISTANCE_UNITS"
export const ADD_PACE_MINUTES = "ADD_PACE_MINUTS"
export const ADD_PACE_SECONDS = "ADD_PACE_SECONDS"
export const ADD_PACE_UNITS = "ADD_PACE_UNITS"

function calculationReducer(state, action) {
    switch(action.type) {
        case ADD_TIME_HOURS: {
            return { 
                ...state, 
                hours: action.payload.hours
            }
        }
        case ADD_TIME_MINUTES: {
            return { 
                ...state, 
                minutes: action.payload.minutes
            }
        }
        case ADD_TIME_SECONDS: {
            return { 
                ...state, 
                seconds: action.payload.seconds
            }
        }
        case ADD_DISTANCE: {
            return { 
                ...state, 
                distance: action.payload.distance
            }
        }
        case ADD_DISTANCE_UNITS: {
            return { 
                ...state, 
                distanceUnits: action.payload.distanceUnits
            }
        }
        case ADD_PACE_MINUTES: {
            return { 
                ...state, 
                paceMinutes: action.payload.paceMinutes
            }
        }
        case ADD_PACE_SECONDS: {
            return { 
                ...state, 
                paceSeconds: action.payload.paceSeconds
            }
        }
        case ADD_PACE_UNITS: {
            return { 
                ...state, 
                paceUnits: action.payload.paceUnits
            }
        }
        default:
            return state;
    }


}

export default calculationReducer