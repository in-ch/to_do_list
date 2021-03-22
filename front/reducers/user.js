import produce from '../util/produce';

export const initialState = {
    loading: false,
    done: false,
    error: null,
    me: null,
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';


const reducer = (state = initialState, action) => produce(state, (draft) => {  
    switch (action.type) {

        case LOG_IN_REQUEST:
            draft.loading = true;
            draft.error = null;
            draft.done = false;
            break;
        case LOG_IN_SUCCESS:
            draft.loading = false;
            draft.me = action.data;
            draft.done = true;
            break;
        case LOG_IN_FAILURE:
            draft.loading = false;
            draft.error = action.error;
            break;

        case REGISTER_REQUEST:
            draft.loading = true;
            draft.error = null;
            draft.done = false;
            break;
        case REGISTER_SUCCESS:
            draft.loading = false;
            // draft.me = action.data;
            console.log(action.data);
            draft.done = true;
            break;
        case REGISTER_FAILURE:
            draft.loading = false;
            draft.error = action.error;
            alert(action.error);
            break;
        default:
            break;
    }
});

export default reducer;
