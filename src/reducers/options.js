import { fromJS } from 'immutable';
import { OPEN_OPTIONS, CLOSE_OPTIONS } from '../action-type/action-type';

const initialState = fromJS({
    options: {
        visivility: false
    }
});

function options(state = initialState, action) {
    switch (action.type) {
        case OPEN_OPTIONS:
            return state.set('visivility', true);
        case CLOSE_OPTIONS:
            return state.set('visivility', false);
        default:
            return state;
    }
}

export default options;