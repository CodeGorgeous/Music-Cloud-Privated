import { legacy_createStore as createStore } from 'redux';
import { missionCenter } from './reducer';

const store = createStore(missionCenter);

export default store;