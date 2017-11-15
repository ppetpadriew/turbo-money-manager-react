import {combineReducers, Reducer} from "redux";
import {IState, IAction} from "./modules/baseModule";
import {router5Reducer} from "redux-router5";
import topNavReducer from "./reducers/topNavReducer";
import IStore from "./IStore";

interface IDefault {

}
const initialState: IState<IDefault> = {
    isFetching: false,
    payload: {}
};
const defaultReducer = (state: IState<IDefault> = initialState, action?: IAction<IDefault>): IState<IDefault> => {
    return state;
};

const rootReducer: Reducer<IStore> = combineReducers<IStore>({
    default: defaultReducer,
    router: router5Reducer,
    topNav: topNavReducer
});

export default rootReducer;