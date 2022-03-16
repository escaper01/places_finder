import { types } from "./shared";

export const initialState = {
  loading: true,
  error: false,
  places: [],
};

export function placeReducer(state, action) {
  switch (action.type) {
    case types.LOADING:
      return { ...state, loading: true, error: false };

    case types.SUCCESS:
      return { loading: false, error: false, places: action.payload };

    case types.FAILURE:
      return { ...state, loading: false, error: true };
  }
}
