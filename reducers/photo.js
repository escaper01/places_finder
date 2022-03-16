import { types, actionCreators } from "./shared";

export const initialState = {
  loading: true,
  error: false,
  photo: null,
};

export function photoReducer(state, action) {
  switch (action.type) {
    case types.LOADING:
      return { ...state, loading: true, error: false };

    case types.SUCCESS:
      return { loading: false, error: false, photo: action.payload };

    case types.FAILURE:
      return { ...state, loading: false, error: true };
  }
}
