import axios from 'axios';

const START_LOADING = 'START_LOADING';
const DATA_LOADED = 'DATA_LOADED';

const initialState = {
    isLoading: false,
    data: { results: [] }
};

export const loadMovies = () => (dispatch) => {
    dispatch({
        type: START_LOADING,
    });

    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=d7da347e5d2991c51568ab07a8256978&language=en-US&page=1')
        .then(response => {
            dispatch({
                type: DATA_LOADED,
                payload: response.data
            })
        }).catch(() => {
            // Если ошибка, то будет пустой
            dispatch({
                type: DATA_LOADED,
                payload: []
            })
        });
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            return Object.assign({}, state, {
                isLoading: true
            });
        case DATA_LOADED:
            return Object.assign({}, state, {
                list: action.payload,
                isLoading: false
            });
        default: return state;
    }
}

export default reducer;
