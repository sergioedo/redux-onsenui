import {
  SET_TEXT
} from '../actions';

const textReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_TEXT:
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
};

export default textReducer;