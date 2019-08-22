import types from '../types';
import api from '../api';

export const postDocument = data => (dispatch, getState) => {
  if (getState().rootReducer.documents.isPostingDocument) {
    return Promise.reject();
  }

  dispatch({
    type: types.POST_DOCUMENT_REQUEST,
  });

  return api.documents.post(data)
    .then(data => {
      const message = (data && data.message) || 'Post success!';
      const payload = { ...data, message };

      dispatch({
        type: types.POST_DOCUMENT_SUCCESS,
        payload,
      });

      return payload;
    })
    .catch(err => {
      const message = (err.response && err.response.data && err.response.data.message) || 'Post Failed!';
      const payload = { ...err, message };

      dispatch({
        type: types.POST_DOCUMENT_FAILURE,
        payload,
      });

      return Promise.reject(payload);
    });
};

export const getDocumentsList = () => (dispatch, getState) => {
  if (getState().rootReducer.documents.isFetchingDocumentsList) {
    return Promise.reject();
  }

  dispatch({
    type: types.GET_DOCUMENTS_LIST_REQUEST,
  });

  return api.documents.getList()
    .then(data => {
      const message = (data && data.message) || 'Get success!';
      const payload = { ...data, message };

      dispatch({
        type: types.GET_DOCUMENTS_LIST_SUCCESS,
        payload,
      });

      return payload;
    })
    .catch(err => {
      const message = (err.response && err.response.data && err.response.data.message) || 'Get List Failed!';
      const payload = { ...err, message };

      dispatch({
        type: types.GET_DOCUMENTS_LIST_FAILURE,
        payload,
      });

      return Promise.reject(payload);
    });
};

export const selectDocument = selectedDocument => ({
  type: types.SELECT_DOCUMENT,
  payload: { selectedDocument },
});
