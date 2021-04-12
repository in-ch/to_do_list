import produce from '../util/produce';

export const initialState = {
    loading: false,
    done: false,
    error: null,
    imagePaths: [],
};

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const CONTENT_UPLOAD_REQUEST = 'CONTENT_UPLOAD_REQUEST';
export const CONTENT_UPLOAD_SUCCESS = 'CONTENT_UPLOAD_SUCCESS';
export const CONTENT_UPLOAD_FAILURE = 'CONTENT_UPLOAD_FAILURE';


const reducer = (state = initialState, action) => produce(state, (draft) => {  
    switch (action.type) {
        case UPLOAD_IMAGES_REQUEST:
            draft.loading = true;
            draft.error = null;
            draft.done = false;
            break;
        case UPLOAD_IMAGES_SUCCESS:
            draft.loading = false;
            draft.imagePaths = action.data;
            console.log(draft.imagePaths);
            draft.done = true;
            break;
        case UPLOAD_IMAGES_FAILURE:
            draft.loading = false;
            draft.error = action.error;
            break;

        case CONTENT_UPLOAD_REQUEST:
            draft.loading = true;
            draft.error = null;
            draft.done = false;
            break;
        case CONTENT_UPLOAD_SUCCESS:
            draft.loading = false;
            console.log(action.data);
            draft.done = true;
            break;
        case CONTENT_UPLOAD_FAILURE:
            draft.loading = false;
            draft.error = action.error;
            break;

        default:
            break;
    }
});

export default reducer;