import {EXAMPLE_ACTION_TYPE} from '../actions/type';

export interface HomeAction {
  type: string;
  payload?: any;
}

const initialState = {
  example: 'default',
};

export default function home(state = initialState, action: HomeAction) {
  switch (action.type) {
    case EXAMPLE_ACTION_TYPE:
      return {
        ...state,
        example: action.payload,
      };
    default:
      return state;
  }
}
