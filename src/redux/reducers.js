import { ADD, DEL } from './types';

const initialState = {
    movieList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                movieList: state.movieList.concat(
                    action.data
                )
            };

        case DEL:
            return {
                ...state,
                movieList: state.movieList.filter((item) =>
                    item.id !== action.id)
            };
            
        default:
            return state;
    }
}

export default reducer