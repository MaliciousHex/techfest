/* eslint-disable */
import * as types from './mutation-types';

export const signIn = ({ commit }, user_payload) => {
	commit(types.SIGN_IN, user_payload);
}

export const singOut = ({ commit }) => {
	commit(types.SIGN_OUT)
}

export const setEvents = ({ commit }, events_payload) => {
	commit(types.SET_EVENTS, events_payload)
}