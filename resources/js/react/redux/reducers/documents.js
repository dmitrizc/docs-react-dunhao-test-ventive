import types from '../types';

const INITIAL_STATE = {
  documents: [],
  isFetchingDocumentsList: false,
  isPostingDocument: false,
  selectedDocumentId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Post Document
    case types.POST_DOCUMENT_REQUEST:
      return {
        ...state,
        isPostingDocument: true,
      };
    case types.POST_DOCUMENT_SUCCESS:
    case types.POST_DOCUMENT_FAILURE:
      return {
        ...state,
        isPostingDocument: false,
      };

    // Get List
    case types.GET_DOCUMENTS_LIST_REQUEST:
      return {
        ...state,
        isFetchingDocumentsList: true,
      };
    case types.GET_DOCUMENTS_LIST_SUCCESS:
      return {
        ...state,
        isFetchingDocumentsList: false,
        documents: action.payload.documents || [],
      };
    case types.GET_DOCUMENTS_LIST_FAILURE:
      return {
        ...state,
        isFetchingDocumentsList: false,
      };

    // Select Document
    case types.SELECT_DOCUMENT:
      return {
        ...state,
        selectedDocumentId: action.payload.selectedDocument.id,
      };

    // Initial state
    default:
      return state;
  }
}
