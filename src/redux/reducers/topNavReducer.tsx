import {IState, IAction} from "../modules/baseModule";

interface ITopNavReducerStates {
    isActive: boolean
}

interface ITopNavReducerActions {

}

const initialState = {
    isFetching: false,
    payload: {
        isActive: false
    },
};

const topNavReducer = (state: IState<ITopNavReducerStates> = initialState, action: IAction<ITopNavReducerActions>): IState<ITopNavReducerStates> => {

    switch (action.type) {
        case 'TOGGLE_ACTIVE':
            state = {...state, payload: {...state.payload, isActive: !state.payload.isActive}};
            break;
        default:
    }

    return state;
};

export default topNavReducer;