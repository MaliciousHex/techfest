import * as types from './mutation-types';
/* eslint-disable */
export const mutations = {
	[types.SIGN_IN](state, user_payload) {
		state.user = user_payload;
	},

	[types.SIGN_OUT](state) {
		state.user = {}
	}
}