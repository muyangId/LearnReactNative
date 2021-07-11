import { ADDMAILANDPWD, DELMAILANDPWD } from './../actions/item';

const initialState = {
  itemList: [],
};

const MixReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDMAILANDPWD:
      return {
        ...state,
        itemList: state.itemList.concat({
          key: Math.random(),
          name: action.data,
        }),
      };
    case DELMAILANDPWD:
      return {
        ...state,
        itemList: state.itemList.concat({
          key: Math.random(),
          name: action.data,
        }),
      };
    default:
      return state;
  }
};

export default MixReducer;
