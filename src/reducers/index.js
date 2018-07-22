import { combineReducers } from 'redux';
import { result, resultHasErrored, resultIsLoading } from './items';

export default combineReducers({
    result,
    resultHasErrored,
    resultIsLoading
});
