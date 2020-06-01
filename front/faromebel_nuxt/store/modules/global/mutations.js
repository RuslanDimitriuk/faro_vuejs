import * as types from './mutation-types'

export default {
  [types.EDIT_STATUS_SHOW](state, payload) {
    state.showPopupFeedback = payload;
    state.statusNumber = payload;
  },
  [types.SET_DATA_FORM](state, payload) {
    switch (payload.name){
      case 'number':{
        state.backCall.number = payload.data;
        break;
      }
      case 'nameCalBack':{
        state.backCall.name = payload.data;
        break;
      }
      case 'question':{
        state.questionObject.question = payload.data;
        break;
      }
      case 'questionObjectName':{
        state.questionObject.name = payload.data;
        break;
      }
      case 'email':{
        state.questionObject.email = payload.data;
        break;
      }
      default:
        break;
    }
  },
}
