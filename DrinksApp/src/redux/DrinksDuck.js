import searchDrinks from '../service';

// constanst

const initialState = {
  inLoading: false,
  data: [],
};

const GET_DRINKS_START = 'GET_DRINKS_START';
const GET_DRINKS_SUCCESS = 'GET_DRINKS_SUCCESS';
const GET_DRINKS_ERROR = 'GET_DRINKS_ERROR';

//reducer
export const getDrinksStart = data => {
  return {
    type: GET_DRINKS_START,
    data,
  };
};

export const getDrinksSuccess = data => {
  return {
    type: GET_DRINKS_SUCCESS,
    data,
  };
};

export const getDrinksError = error => {
  return {
    type: GET_DRINKS_ERROR,
    error,
  };
};

const DrinksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRINKS_START:
      return {...state, isLoading: true};
    case GET_DRINKS_SUCCESS:
      return {...state, data: action.payload, isLoading: false};
    case GET_DRINKS_ERROR:
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
};

export default DrinksReducer;

//actions (thunks)

export function getDrinks(val, data, error) {
  return async dispatch => {
    try {
      dispatch(getDrinksStart(data));
      let drinks = await searchDrinks.getDrinks(val);
      dispatch(getDrinksSuccess(drinks));
    } catch (err) {
      dispatch(getDrinksError(error));
    }
  };
}
