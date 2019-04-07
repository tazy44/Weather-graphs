import {FETCH_WEATHER} from '../actions/action-types'

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            return [action.payload, ...state];
        default:
            return state;
    }
}