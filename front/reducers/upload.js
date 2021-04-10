import produce from '../util/produce';

export const uploadInitialState = {
    loading: false,
    done: false,
    error: null,
    userInfo: null,
};

export const UPLOAD_REQUEST = 'UPLOAD_REQUEST';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const UPLOAD_FAILURE = 'UPLOAD_FAILURE';


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
            alert(action.error);
            draft.error = action.error;
            break;
        default:
            break;
    }
});

export default reducer;