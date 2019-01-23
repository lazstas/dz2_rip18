import { getMovies } from "api";

const ACTIONS = {
    START_LOADING: 'LIST_START_LOADING',
    DATA_LOADED: 'LIST_DATA_LOADED',
    ERROR_LOADING: 'LIST_ERROR_LOADING',
}

const initialState = {
    movies: {
        results: []
    },
    isLoading: false,
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.START_LOADING:
            return { ...state, isLoading: true };
        case ACTIONS.DATA_LOADED:
            return {
                ...state,
                isLoading: false,
                movies: action.payload
            };
        case ACTIONS.ERROR_LOADING:
            return { ...state, isLoading: false, };
        default:
            return state;
    }
}


export const loadMovies = () => async (dispatch) => {
    try {
        dispatch({
            type: ACTIONS.START_LOADING,
        });

        const res = await getMovies();

        dispatch({
            type: ACTIONS.DATA_LOADED,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);

        dispatch({
            type: ACTIONS.ERROR_LOADING,
        });
    }
}

export default listReducer;