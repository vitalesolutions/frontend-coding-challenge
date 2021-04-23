import { ConfigActions } from '../model/config';
import { Absences, AbsenceAction, AbsenceListActions } from '../model/index';
import createReducer from './createReducer';

export const todoList = createReducer<Absences[]>([], {
    [AbsenceListActions.SET_ABSENCE](state: Absences[], action: AbsenceAction) {
        console.log('createReducercreateReducercreateReducer:', action.payload);
        state = <Absences[]>action.payload;
        return state;
    },
    [AbsenceListActions.ADD_ABSENCE](state: Absences[], action: AbsenceAction) {
        return [...state, action.payload];
    },
    [ConfigActions.PURGE_STATE](state: Absences[], action: AbsenceAction) {
        return [];
    },
});
