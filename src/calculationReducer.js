export const ADD_TIME_HOURS = "ADD_TIME_HOURS"
export const ADD_TIME_MINUTES = "ADD_TIME_MINUTES"
export const ADD_TIME_SECONDS = "ADD_TIME_SECONDS"
export const ADD_DISTANCE = "ADD_DISTANCE"
export const ADD_DISTANCE_UNITS = "ADD_DISTANCE_UNITS"
export const ADD_PACE_MINUTES = "ADD_PACE_MINUTS"
export const ADD_PACE_SECONDS = "ADD_PACE_SECONDS"
export const ADD_PACE_UNITS = "ADD_PACE_UNITS"
export const REMOVE_TIME = "REMOVE_TIME"
export const REMOVE_DISTANCE = "REMOVE_DISTANCE"
export const REMOVE_PACE = "REMOVE_PACE"

function calculationReducer(state, action) {
    switch (action.type) {
        case ADD_TIME_HOURS: {
            return {
                ...state,
                hours: action.payload.hours,
                isTimeSet: action.payload.isTimeSet
            }
        }
        case ADD_TIME_MINUTES: {
            return {
                ...state,
                minutes: action.payload.minutes,
                isTimeSet: action.payload.isTimeSet
            }
        }
        case ADD_TIME_SECONDS: {
            return {
                ...state,
                seconds: action.payload.seconds,
                isTimeSet: action.payload.isTimeSet
            }
        }
        case REMOVE_TIME: {
            return {
                ...state,
                // hours: action.payload.hours,
                // minutes: action.payload.minutes,
                // seconds: action.payload.seconds,
                isTimeSet: action.payload.isTimeSet
            }
        }
        case ADD_DISTANCE: {
            return {
                ...state,
                distance: action.payload.distance,
                isDistanceSet: action.payload.isDistanceSet
            }
        }
        case ADD_DISTANCE_UNITS: {
            return {
                ...state,
                distanceUnits: action.payload.distanceUnits
            }
        }
        case REMOVE_DISTANCE: {
            return {
                ...state,
                isDistanceSet: action.payload.isDistanceSet
            }
        }
        case ADD_PACE_MINUTES: {
            return {
                ...state,
                paceMinutes: action.payload.paceMinutes,
                isPaceSet: action.payload.isPaceSet
            }
        }
        case ADD_PACE_SECONDS: {
            return {
                ...state,
                paceSeconds: action.payload.paceSeconds,
                isPaceSet: action.payload.isPaceSet
            }
        }
        case ADD_PACE_UNITS: {
            return {
                ...state,
                paceUnits: action.payload.paceUnits
            }
        }
        case REMOVE_PACE: {
            return {
                ...state,
                isPaceSet: action.payload.isPaceSet
            }
        }
        default:
            return state;
    }
}

export default calculationReducer