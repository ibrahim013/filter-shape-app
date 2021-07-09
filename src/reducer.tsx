import { ShapeAction } from './action';
import { StoreState } from './store';
import { FILTER_COLORS, FILTER_SHAPES } from './types';
import { updateFilterState } from './Utility';

const shapeReducer = (state: StoreState, action: ShapeAction) => {
  switch (action.type) {
    case FILTER_SHAPES:
      return {
        ...state, filter: {
          ...state.filter,
          shape: updateFilterState(state.filter.shape, action.data)
        }
      };
    case FILTER_COLORS:
      return {
        ...state, filter: {
          ...state.filter,
          color: updateFilterState(state.filter.color, action.data)
        }
      };
    default:
      return state;
  }
}

export default shapeReducer;