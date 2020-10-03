import { CHANGE_CARD_DESCRIPTION } from './actions';

const defaultState = {
    cardDescription: ""
};

export const backgroundReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_CARD_DESCRIPTION:
            return {
                ...state,
                cardDescription: action.payload
            };
        default:
            return state;
    };
};

