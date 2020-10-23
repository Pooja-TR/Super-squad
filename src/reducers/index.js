import { combineReducers } from 'redux';
import characters_json from '../data/characters.json';

import characters from './characters_reducers';
import heros from './heros_reducers';

const rootReducer = combineReducers({
    characters,
    heros
})

export default rootReducer;