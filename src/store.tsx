import { useReducer, createContext, PropsWithChildren, Dispatch } from 'react';
import { ShapeAction } from './action';
import data from './Fixtures.json'
import shapeReducer from './reducer';

type Shapes = {
  shape: string,
  color: string[]
}

export type StoreState = {
  shapes: Shapes[];
  loading: boolean;
  filter: {
    shape: string[],
    color: string[],
  }
}

type Store = {
  state: StoreState;
  dispatch: Dispatch<ShapeAction>;
}


const initialState = {
  shapes: data.items,
  loading: false,
  filter: {
    shape: [],
    color: []
  }

}

const store = createContext<Store>({
  state: initialState,
  dispatch: () => null
});


const { Provider } = store;

const StateProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  const [state, dispatch] = useReducer(shapeReducer, initialState);
  return <Provider value={{ state, dispatch }}><>{children}</></Provider>;
};

export { store, StateProvider };