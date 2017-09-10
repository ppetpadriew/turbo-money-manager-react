import {combineReducers, Reducer} from "redux";
import {IState, IAction} from "./modules/baseModule";
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
    default: defaultReducer
});

export default rootReducer;