import { combineReducers } from 'redux';
import AuthReducer from './modules/auth/store/AuthReducer';
import ColorsReducer from './modules/customization/colorPicker/store/ColorsReducer';
import LanguageReducer from './modules/customization/language/store/LanguageReducer';

export default combineReducers({
    security: AuthReducer,
    customization: ColorsReducer, 
    language: LanguageReducer
})